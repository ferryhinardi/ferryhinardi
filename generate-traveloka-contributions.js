const fs = require('fs');
const path = require('path');

// Read CSV file
const csvPath = '/Users/ferryhinardi/Desktop/ferryhinardi\'s Commits.csv';
const csvData = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV
const lines = csvData.trim().split('\n').slice(1); // Skip header
const contributions = lines.map(line => {
  const match = line.match(/"([^"]+)",(\d+)/);
  if (match) {
    return {
      week: match[1],
      commits: parseInt(match[2])
    };
  }
  return null;
}).filter(Boolean);

// Calculate statistics
const totalCommits = contributions.reduce((sum, c) => sum + c.commits, 0);
const activeWeeks = contributions.filter(c => c.commits > 0).length;
const maxCommits = Math.max(...contributions.map(c => c.commits));
const avgCommits = (totalCommits / activeWeeks).toFixed(1);

// Find most productive period
const yearlyStats = {};
contributions.forEach(c => {
  const year = c.week.split('-')[0];
  if (!yearlyStats[year]) yearlyStats[year] = 0;
  yearlyStats[year] += c.commits;
});
const mostProductiveYear = Object.entries(yearlyStats)
  .sort((a, b) => b[1] - a[1])[0];

// Filter last 52 weeks for visualization (GitHub-style)
const last52Weeks = contributions.slice(-52);

// Create color scale (GitHub green style)
function getColor(commits) {
  if (commits === 0) return '#ebedf0';
  if (commits <= 2) return '#9be9a8';
  if (commits <= 5) return '#40c463';
  if (commits <= 10) return '#30a14e';
  return '#216e39';
}

// Generate SVG
const cellSize = 10;
const cellGap = 3;
const width = 800;
const height = 200;

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <style>
    .title { font: bold 16px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; fill: #24292e; }
    .subtitle { font: 12px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; fill: #586069; }
    .stat-label { font: bold 14px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; fill: #24292e; }
    .stat-value { font: 24px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; fill: #0366d6; }
    .legend { font: 11px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; fill: #586069; }
  </style>
  
  <!-- Title -->
  <text x="10" y="25" class="title">Traveloka Contributions (2015-2025)</text>
  <text x="10" y="45" class="subtitle">Private repository contributions from company work</text>
  
  <!-- Statistics -->
  <g transform="translate(10, 70)">
    <text x="0" y="0" class="stat-label">Total Commits:</text>
    <text x="0" y="25" class="stat-value">${totalCommits.toLocaleString()}</text>
    
    <text x="150" y="0" class="stat-label">Active Weeks:</text>
    <text x="150" y="25" class="stat-value">${activeWeeks}</text>
    
    <text x="300" y="0" class="stat-label">Peak Week:</text>
    <text x="300" y="25" class="stat-value">${maxCommits}</text>
    
    <text x="450" y="0" class="stat-label">Avg/Week:</text>
    <text x="450" y="25" class="stat-value">${avgCommits}</text>
    
    <text x="600" y="0" class="stat-label">Best Year:</text>
    <text x="600" y="25" class="stat-value">${mostProductiveYear[0]}</text>
  </g>
  
  <!-- Contribution Grid (last 52 weeks) -->
  <g transform="translate(10, 130)">
    ${last52Weeks.map((week, i) => {
      const x = i * (cellSize + cellGap);
      return `<rect x="${x}" y="0" width="${cellSize}" height="${cellSize}" 
        fill="${getColor(week.commits)}" rx="2">
        <title>${week.week}: ${week.commits} commit${week.commits !== 1 ? 's' : ''}</title>
      </rect>`;
    }).join('\n    ')}
  </g>
  
  <!-- Legend -->
  <g transform="translate(10, 160)">
    <text x="0" y="12" class="legend">Less</text>
    <rect x="35" y="2" width="10" height="10" fill="#ebedf0" rx="2"/>
    <rect x="48" y="2" width="10" height="10" fill="#9be9a8" rx="2"/>
    <rect x="61" y="2" width="10" height="10" fill="#40c463" rx="2"/>
    <rect x="74" y="2" width="10" height="10" fill="#30a14e" rx="2"/>
    <rect x="87" y="2" width="10" height="10" fill="#216e39" rx="2"/>
    <text x="102" y="12" class="legend">More</text>
  </g>
</svg>`;

// Save SVG
const outputPath = path.join(__dirname, 'traveloka-contributions.svg');
fs.writeFileSync(outputPath, svg);

console.log(`✓ Generated traveloka-contributions.svg`);
console.log(`✓ Total commits: ${totalCommits.toLocaleString()}`);
console.log(`✓ Active weeks: ${activeWeeks} / ${contributions.length}`);
console.log(`✓ Most productive year: ${mostProductiveYear[0]} (${mostProductiveYear[1]} commits)`);

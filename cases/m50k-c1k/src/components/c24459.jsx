import React from 'react';
const LABEL_24459 = 'component_24459';
export function Component24459({ value = 24459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24459, 'data-value': derived.doubled }, children);
}
export default Component24459;

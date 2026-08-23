import React from 'react';
const LABEL_15988 = 'component_15988';
export function Component15988({ value = 15988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15988, 'data-value': derived.doubled }, children);
}
export default Component15988;

import React from 'react';
const LABEL_13685 = 'component_13685';
export function Component13685({ value = 13685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13685, 'data-value': derived.doubled }, children);
}
export default Component13685;

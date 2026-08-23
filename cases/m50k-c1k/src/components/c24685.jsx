import React from 'react';
const LABEL_24685 = 'component_24685';
export function Component24685({ value = 24685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24685, 'data-value': derived.doubled }, children);
}
export default Component24685;

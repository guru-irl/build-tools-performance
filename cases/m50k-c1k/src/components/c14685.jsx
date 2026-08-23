import React from 'react';
const LABEL_14685 = 'component_14685';
export function Component14685({ value = 14685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14685, 'data-value': derived.doubled }, children);
}
export default Component14685;

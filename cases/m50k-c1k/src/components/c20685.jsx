import React from 'react';
const LABEL_20685 = 'component_20685';
export function Component20685({ value = 20685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20685, 'data-value': derived.doubled }, children);
}
export default Component20685;

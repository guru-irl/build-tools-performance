import React from 'react';
const LABEL_20018 = 'component_20018';
export function Component20018({ value = 20018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20018, 'data-value': derived.doubled }, children);
}
export default Component20018;

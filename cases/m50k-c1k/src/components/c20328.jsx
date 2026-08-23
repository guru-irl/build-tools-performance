import React from 'react';
const LABEL_20328 = 'component_20328';
export function Component20328({ value = 20328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20328, 'data-value': derived.doubled }, children);
}
export default Component20328;

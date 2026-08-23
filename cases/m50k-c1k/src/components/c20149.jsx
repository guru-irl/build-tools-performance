import React from 'react';
const LABEL_20149 = 'component_20149';
export function Component20149({ value = 20149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20149, 'data-value': derived.doubled }, children);
}
export default Component20149;

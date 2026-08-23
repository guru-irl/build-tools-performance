import React from 'react';
const LABEL_20081 = 'component_20081';
export function Component20081({ value = 20081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20081, 'data-value': derived.doubled }, children);
}
export default Component20081;

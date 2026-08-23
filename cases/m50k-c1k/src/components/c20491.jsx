import React from 'react';
const LABEL_20491 = 'component_20491';
export function Component20491({ value = 20491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20491, 'data-value': derived.doubled }, children);
}
export default Component20491;

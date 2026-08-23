import React from 'react';
const LABEL_44541 = 'component_44541';
export function Component44541({ value = 44541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44541, 'data-value': derived.doubled }, children);
}
export default Component44541;

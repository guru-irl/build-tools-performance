import React from 'react';
const LABEL_6382 = 'component_6382';
export function Component6382({ value = 6382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6382, 'data-value': derived.doubled }, children);
}
export default Component6382;

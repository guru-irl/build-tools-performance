import React from 'react';
const LABEL_19133 = 'component_19133';
export function Component19133({ value = 19133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19133, 'data-value': derived.doubled }, children);
}
export default Component19133;

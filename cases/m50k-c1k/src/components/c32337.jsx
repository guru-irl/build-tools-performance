import React from 'react';
const LABEL_32337 = 'component_32337';
export function Component32337({ value = 32337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32337, 'data-value': derived.doubled }, children);
}
export default Component32337;

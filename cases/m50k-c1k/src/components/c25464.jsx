import React from 'react';
const LABEL_25464 = 'component_25464';
export function Component25464({ value = 25464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25464, 'data-value': derived.doubled }, children);
}
export default Component25464;

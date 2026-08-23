import React from 'react';
const LABEL_34453 = 'component_34453';
export function Component34453({ value = 34453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34453, 'data-value': derived.doubled }, children);
}
export default Component34453;

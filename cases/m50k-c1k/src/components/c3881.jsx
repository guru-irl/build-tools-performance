import React from 'react';
const LABEL_3881 = 'component_3881';
export function Component3881({ value = 3881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3881, 'data-value': derived.doubled }, children);
}
export default Component3881;

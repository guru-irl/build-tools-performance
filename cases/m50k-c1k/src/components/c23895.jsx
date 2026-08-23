import React from 'react';
const LABEL_23895 = 'component_23895';
export function Component23895({ value = 23895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23895, 'data-value': derived.doubled }, children);
}
export default Component23895;

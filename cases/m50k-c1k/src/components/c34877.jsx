import React from 'react';
const LABEL_34877 = 'component_34877';
export function Component34877({ value = 34877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34877, 'data-value': derived.doubled }, children);
}
export default Component34877;

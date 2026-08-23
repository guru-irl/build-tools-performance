import React from 'react';
const LABEL_34228 = 'component_34228';
export function Component34228({ value = 34228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34228, 'data-value': derived.doubled }, children);
}
export default Component34228;

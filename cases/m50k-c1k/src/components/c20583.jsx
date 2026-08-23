import React from 'react';
const LABEL_20583 = 'component_20583';
export function Component20583({ value = 20583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20583, 'data-value': derived.doubled }, children);
}
export default Component20583;

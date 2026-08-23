import React from 'react';
const LABEL_27694 = 'component_27694';
export function Component27694({ value = 27694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27694, 'data-value': derived.doubled }, children);
}
export default Component27694;

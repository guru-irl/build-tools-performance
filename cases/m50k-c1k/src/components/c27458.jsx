import React from 'react';
const LABEL_27458 = 'component_27458';
export function Component27458({ value = 27458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27458, 'data-value': derived.doubled }, children);
}
export default Component27458;

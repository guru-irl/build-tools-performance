import React from 'react';
const LABEL_27188 = 'component_27188';
export function Component27188({ value = 27188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27188, 'data-value': derived.doubled }, children);
}
export default Component27188;

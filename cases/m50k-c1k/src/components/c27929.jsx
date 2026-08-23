import React from 'react';
const LABEL_27929 = 'component_27929';
export function Component27929({ value = 27929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27929, 'data-value': derived.doubled }, children);
}
export default Component27929;

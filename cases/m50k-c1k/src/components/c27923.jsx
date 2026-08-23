import React from 'react';
const LABEL_27923 = 'component_27923';
export function Component27923({ value = 27923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27923, 'data-value': derived.doubled }, children);
}
export default Component27923;

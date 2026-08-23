import React from 'react';
const LABEL_27935 = 'component_27935';
export function Component27935({ value = 27935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27935, 'data-value': derived.doubled }, children);
}
export default Component27935;

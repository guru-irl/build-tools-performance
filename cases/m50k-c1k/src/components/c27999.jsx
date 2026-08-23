import React from 'react';
const LABEL_27999 = 'component_27999';
export function Component27999({ value = 27999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27999, 'data-value': derived.doubled }, children);
}
export default Component27999;

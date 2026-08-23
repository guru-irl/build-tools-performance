import React from 'react';
const LABEL_27100 = 'component_27100';
export function Component27100({ value = 27100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27100, 'data-value': derived.doubled }, children);
}
export default Component27100;

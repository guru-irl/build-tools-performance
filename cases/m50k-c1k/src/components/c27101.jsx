import React from 'react';
const LABEL_27101 = 'component_27101';
export function Component27101({ value = 27101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27101, 'data-value': derived.doubled }, children);
}
export default Component27101;

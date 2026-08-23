import React from 'react';
const LABEL_27238 = 'component_27238';
export function Component27238({ value = 27238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27238, 'data-value': derived.doubled }, children);
}
export default Component27238;

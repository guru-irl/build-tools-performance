import React from 'react';
const LABEL_27853 = 'component_27853';
export function Component27853({ value = 27853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27853, 'data-value': derived.doubled }, children);
}
export default Component27853;

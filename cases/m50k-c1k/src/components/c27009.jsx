import React from 'react';
const LABEL_27009 = 'component_27009';
export function Component27009({ value = 27009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27009, 'data-value': derived.doubled }, children);
}
export default Component27009;

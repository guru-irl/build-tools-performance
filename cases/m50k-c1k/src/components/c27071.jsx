import React from 'react';
const LABEL_27071 = 'component_27071';
export function Component27071({ value = 27071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27071, 'data-value': derived.doubled }, children);
}
export default Component27071;

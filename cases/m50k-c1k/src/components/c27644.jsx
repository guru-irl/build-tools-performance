import React from 'react';
const LABEL_27644 = 'component_27644';
export function Component27644({ value = 27644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27644, 'data-value': derived.doubled }, children);
}
export default Component27644;

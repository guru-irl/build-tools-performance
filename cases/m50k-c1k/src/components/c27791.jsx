import React from 'react';
const LABEL_27791 = 'component_27791';
export function Component27791({ value = 27791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27791, 'data-value': derived.doubled }, children);
}
export default Component27791;

import React from 'react';
const LABEL_27139 = 'component_27139';
export function Component27139({ value = 27139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27139, 'data-value': derived.doubled }, children);
}
export default Component27139;

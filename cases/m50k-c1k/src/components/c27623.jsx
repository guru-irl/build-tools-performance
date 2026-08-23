import React from 'react';
const LABEL_27623 = 'component_27623';
export function Component27623({ value = 27623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27623, 'data-value': derived.doubled }, children);
}
export default Component27623;

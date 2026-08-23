import React from 'react';
const LABEL_27845 = 'component_27845';
export function Component27845({ value = 27845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27845, 'data-value': derived.doubled }, children);
}
export default Component27845;

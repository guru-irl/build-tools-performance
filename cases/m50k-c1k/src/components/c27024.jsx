import React from 'react';
const LABEL_27024 = 'component_27024';
export function Component27024({ value = 27024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27024, 'data-value': derived.doubled }, children);
}
export default Component27024;

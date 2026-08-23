import React from 'react';
const LABEL_27045 = 'component_27045';
export function Component27045({ value = 27045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27045, 'data-value': derived.doubled }, children);
}
export default Component27045;

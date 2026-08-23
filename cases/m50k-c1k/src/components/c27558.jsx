import React from 'react';
const LABEL_27558 = 'component_27558';
export function Component27558({ value = 27558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27558, 'data-value': derived.doubled }, children);
}
export default Component27558;

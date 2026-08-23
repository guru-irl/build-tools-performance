import React from 'react';
const LABEL_27110 = 'component_27110';
export function Component27110({ value = 27110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27110, 'data-value': derived.doubled }, children);
}
export default Component27110;

import React from 'react';
const LABEL_27972 = 'component_27972';
export function Component27972({ value = 27972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27972, 'data-value': derived.doubled }, children);
}
export default Component27972;

import React from 'react';
const LABEL_20941 = 'component_20941';
export function Component20941({ value = 20941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20941, 'data-value': derived.doubled }, children);
}
export default Component20941;

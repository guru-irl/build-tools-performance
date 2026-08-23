import React from 'react';
const LABEL_20237 = 'component_20237';
export function Component20237({ value = 20237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20237, 'data-value': derived.doubled }, children);
}
export default Component20237;

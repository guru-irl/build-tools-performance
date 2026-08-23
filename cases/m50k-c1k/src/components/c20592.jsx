import React from 'react';
const LABEL_20592 = 'component_20592';
export function Component20592({ value = 20592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20592, 'data-value': derived.doubled }, children);
}
export default Component20592;

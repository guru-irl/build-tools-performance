import React from 'react';
const LABEL_29683 = 'component_29683';
export function Component29683({ value = 29683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29683, 'data-value': derived.doubled }, children);
}
export default Component29683;

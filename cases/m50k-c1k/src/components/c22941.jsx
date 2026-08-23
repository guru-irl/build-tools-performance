import React from 'react';
const LABEL_22941 = 'component_22941';
export function Component22941({ value = 22941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22941, 'data-value': derived.doubled }, children);
}
export default Component22941;

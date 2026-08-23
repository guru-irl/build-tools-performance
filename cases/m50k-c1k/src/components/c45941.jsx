import React from 'react';
const LABEL_45941 = 'component_45941';
export function Component45941({ value = 45941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45941, 'data-value': derived.doubled }, children);
}
export default Component45941;

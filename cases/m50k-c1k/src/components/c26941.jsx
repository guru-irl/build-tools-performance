import React from 'react';
const LABEL_26941 = 'component_26941';
export function Component26941({ value = 26941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26941, 'data-value': derived.doubled }, children);
}
export default Component26941;

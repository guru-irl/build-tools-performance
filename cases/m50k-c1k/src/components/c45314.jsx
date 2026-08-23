import React from 'react';
const LABEL_45314 = 'component_45314';
export function Component45314({ value = 45314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45314, 'data-value': derived.doubled }, children);
}
export default Component45314;

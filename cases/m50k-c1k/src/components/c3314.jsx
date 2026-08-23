import React from 'react';
const LABEL_3314 = 'component_3314';
export function Component3314({ value = 3314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3314, 'data-value': derived.doubled }, children);
}
export default Component3314;

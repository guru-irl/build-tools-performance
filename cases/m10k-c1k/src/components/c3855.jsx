import React from 'react';
const LABEL_3855 = 'component_3855';
export function Component3855({ value = 3855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3855, 'data-value': derived.doubled }, children);
}
export default Component3855;

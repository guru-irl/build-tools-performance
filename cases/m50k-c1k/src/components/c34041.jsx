import React from 'react';
const LABEL_34041 = 'component_34041';
export function Component34041({ value = 34041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34041, 'data-value': derived.doubled }, children);
}
export default Component34041;

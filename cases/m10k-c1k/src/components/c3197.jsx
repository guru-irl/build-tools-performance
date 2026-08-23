import React from 'react';
const LABEL_3197 = 'component_3197';
export function Component3197({ value = 3197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3197, 'data-value': derived.doubled }, children);
}
export default Component3197;

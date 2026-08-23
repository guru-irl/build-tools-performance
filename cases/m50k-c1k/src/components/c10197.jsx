import React from 'react';
const LABEL_10197 = 'component_10197';
export function Component10197({ value = 10197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10197, 'data-value': derived.doubled }, children);
}
export default Component10197;

import React from 'react';
const LABEL_35197 = 'component_35197';
export function Component35197({ value = 35197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35197, 'data-value': derived.doubled }, children);
}
export default Component35197;

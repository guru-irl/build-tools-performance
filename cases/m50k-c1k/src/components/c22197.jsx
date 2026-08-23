import React from 'react';
const LABEL_22197 = 'component_22197';
export function Component22197({ value = 22197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22197, 'data-value': derived.doubled }, children);
}
export default Component22197;

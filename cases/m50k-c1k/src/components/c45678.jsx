import React from 'react';
const LABEL_45678 = 'component_45678';
export function Component45678({ value = 45678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45678, 'data-value': derived.doubled }, children);
}
export default Component45678;

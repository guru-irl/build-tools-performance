import React from 'react';
const LABEL_45779 = 'component_45779';
export function Component45779({ value = 45779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45779, 'data-value': derived.doubled }, children);
}
export default Component45779;

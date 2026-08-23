import React from 'react';
const LABEL_29813 = 'component_29813';
export function Component29813({ value = 29813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29813, 'data-value': derived.doubled }, children);
}
export default Component29813;

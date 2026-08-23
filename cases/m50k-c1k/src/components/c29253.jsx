import React from 'react';
const LABEL_29253 = 'component_29253';
export function Component29253({ value = 29253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29253, 'data-value': derived.doubled }, children);
}
export default Component29253;

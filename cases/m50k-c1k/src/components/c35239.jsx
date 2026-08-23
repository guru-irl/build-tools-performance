import React from 'react';
const LABEL_35239 = 'component_35239';
export function Component35239({ value = 35239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35239, 'data-value': derived.doubled }, children);
}
export default Component35239;

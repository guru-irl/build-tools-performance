import React from 'react';
const LABEL_33239 = 'component_33239';
export function Component33239({ value = 33239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33239, 'data-value': derived.doubled }, children);
}
export default Component33239;

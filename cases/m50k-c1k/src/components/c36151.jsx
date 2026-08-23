import React from 'react';
const LABEL_36151 = 'component_36151';
export function Component36151({ value = 36151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36151, 'data-value': derived.doubled }, children);
}
export default Component36151;

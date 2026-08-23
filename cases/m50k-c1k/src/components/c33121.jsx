import React from 'react';
const LABEL_33121 = 'component_33121';
export function Component33121({ value = 33121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33121, 'data-value': derived.doubled }, children);
}
export default Component33121;

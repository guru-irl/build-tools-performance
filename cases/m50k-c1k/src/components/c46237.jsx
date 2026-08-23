import React from 'react';
const LABEL_46237 = 'component_46237';
export function Component46237({ value = 46237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46237, 'data-value': derived.doubled }, children);
}
export default Component46237;

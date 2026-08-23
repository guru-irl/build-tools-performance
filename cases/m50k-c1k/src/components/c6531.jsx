import React from 'react';
const LABEL_6531 = 'component_6531';
export function Component6531({ value = 6531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6531, 'data-value': derived.doubled }, children);
}
export default Component6531;

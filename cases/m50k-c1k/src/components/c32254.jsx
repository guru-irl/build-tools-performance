import React from 'react';
const LABEL_32254 = 'component_32254';
export function Component32254({ value = 32254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32254, 'data-value': derived.doubled }, children);
}
export default Component32254;

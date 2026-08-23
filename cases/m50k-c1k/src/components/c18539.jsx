import React from 'react';
const LABEL_18539 = 'component_18539';
export function Component18539({ value = 18539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18539, 'data-value': derived.doubled }, children);
}
export default Component18539;

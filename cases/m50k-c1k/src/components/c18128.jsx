import React from 'react';
const LABEL_18128 = 'component_18128';
export function Component18128({ value = 18128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18128, 'data-value': derived.doubled }, children);
}
export default Component18128;

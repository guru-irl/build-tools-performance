import React from 'react';
const LABEL_18208 = 'component_18208';
export function Component18208({ value = 18208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18208, 'data-value': derived.doubled }, children);
}
export default Component18208;

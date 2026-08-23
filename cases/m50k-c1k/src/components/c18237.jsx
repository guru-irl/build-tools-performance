import React from 'react';
const LABEL_18237 = 'component_18237';
export function Component18237({ value = 18237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18237, 'data-value': derived.doubled }, children);
}
export default Component18237;

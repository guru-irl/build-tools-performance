import React from 'react';
const LABEL_18137 = 'component_18137';
export function Component18137({ value = 18137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18137, 'data-value': derived.doubled }, children);
}
export default Component18137;

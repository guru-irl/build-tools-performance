import React from 'react';
const LABEL_29341 = 'component_29341';
export function Component29341({ value = 29341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29341, 'data-value': derived.doubled }, children);
}
export default Component29341;

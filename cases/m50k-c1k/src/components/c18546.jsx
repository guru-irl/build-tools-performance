import React from 'react';
const LABEL_18546 = 'component_18546';
export function Component18546({ value = 18546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18546, 'data-value': derived.doubled }, children);
}
export default Component18546;

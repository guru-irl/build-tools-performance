import React from 'react';
const LABEL_18668 = 'component_18668';
export function Component18668({ value = 18668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18668, 'data-value': derived.doubled }, children);
}
export default Component18668;

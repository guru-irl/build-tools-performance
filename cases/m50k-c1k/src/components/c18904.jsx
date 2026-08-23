import React from 'react';
const LABEL_18904 = 'component_18904';
export function Component18904({ value = 18904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18904, 'data-value': derived.doubled }, children);
}
export default Component18904;

import React from 'react';
const LABEL_22904 = 'component_22904';
export function Component22904({ value = 22904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22904, 'data-value': derived.doubled }, children);
}
export default Component22904;

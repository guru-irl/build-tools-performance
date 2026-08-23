import React from 'react';
const LABEL_31904 = 'component_31904';
export function Component31904({ value = 31904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31904, 'data-value': derived.doubled }, children);
}
export default Component31904;

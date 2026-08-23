import React from 'react';
const LABEL_45904 = 'component_45904';
export function Component45904({ value = 45904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45904, 'data-value': derived.doubled }, children);
}
export default Component45904;

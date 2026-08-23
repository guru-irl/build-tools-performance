import React from 'react';
const LABEL_33904 = 'component_33904';
export function Component33904({ value = 33904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33904, 'data-value': derived.doubled }, children);
}
export default Component33904;

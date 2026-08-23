import React from 'react';
const LABEL_26904 = 'component_26904';
export function Component26904({ value = 26904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26904, 'data-value': derived.doubled }, children);
}
export default Component26904;

import React from 'react';
const LABEL_40904 = 'component_40904';
export function Component40904({ value = 40904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40904, 'data-value': derived.doubled }, children);
}
export default Component40904;

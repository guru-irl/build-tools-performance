import React from 'react';
const LABEL_26314 = 'component_26314';
export function Component26314({ value = 26314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26314, 'data-value': derived.doubled }, children);
}
export default Component26314;

import React from 'react';
const LABEL_26798 = 'component_26798';
export function Component26798({ value = 26798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26798, 'data-value': derived.doubled }, children);
}
export default Component26798;

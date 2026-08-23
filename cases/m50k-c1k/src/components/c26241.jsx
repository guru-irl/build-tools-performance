import React from 'react';
const LABEL_26241 = 'component_26241';
export function Component26241({ value = 26241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26241, 'data-value': derived.doubled }, children);
}
export default Component26241;

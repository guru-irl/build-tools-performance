import React from 'react';
const LABEL_26252 = 'component_26252';
export function Component26252({ value = 26252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26252, 'data-value': derived.doubled }, children);
}
export default Component26252;

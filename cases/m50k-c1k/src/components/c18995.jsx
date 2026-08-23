import React from 'react';
const LABEL_18995 = 'component_18995';
export function Component18995({ value = 18995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18995, 'data-value': derived.doubled }, children);
}
export default Component18995;

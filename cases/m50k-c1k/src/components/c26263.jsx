import React from 'react';
const LABEL_26263 = 'component_26263';
export function Component26263({ value = 26263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26263, 'data-value': derived.doubled }, children);
}
export default Component26263;

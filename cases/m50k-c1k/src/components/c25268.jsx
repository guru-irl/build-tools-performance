import React from 'react';
const LABEL_25268 = 'component_25268';
export function Component25268({ value = 25268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25268, 'data-value': derived.doubled }, children);
}
export default Component25268;

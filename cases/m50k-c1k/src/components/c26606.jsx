import React from 'react';
const LABEL_26606 = 'component_26606';
export function Component26606({ value = 26606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26606, 'data-value': derived.doubled }, children);
}
export default Component26606;

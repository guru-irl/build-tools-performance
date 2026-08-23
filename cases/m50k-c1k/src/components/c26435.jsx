import React from 'react';
const LABEL_26435 = 'component_26435';
export function Component26435({ value = 26435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26435, 'data-value': derived.doubled }, children);
}
export default Component26435;

import React from 'react';
const LABEL_6279 = 'component_6279';
export function Component6279({ value = 6279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6279, 'data-value': derived.doubled }, children);
}
export default Component6279;

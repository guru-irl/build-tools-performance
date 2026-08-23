import React from 'react';
const LABEL_39853 = 'component_39853';
export function Component39853({ value = 39853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39853, 'data-value': derived.doubled }, children);
}
export default Component39853;

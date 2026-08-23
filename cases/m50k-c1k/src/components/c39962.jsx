import React from 'react';
const LABEL_39962 = 'component_39962';
export function Component39962({ value = 39962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39962, 'data-value': derived.doubled }, children);
}
export default Component39962;

import React from 'react';
const LABEL_39334 = 'component_39334';
export function Component39334({ value = 39334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39334, 'data-value': derived.doubled }, children);
}
export default Component39334;

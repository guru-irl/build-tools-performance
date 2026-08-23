import React from 'react';
const LABEL_39111 = 'component_39111';
export function Component39111({ value = 39111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39111, 'data-value': derived.doubled }, children);
}
export default Component39111;

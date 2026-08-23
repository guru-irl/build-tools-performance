import React from 'react';
const LABEL_39474 = 'component_39474';
export function Component39474({ value = 39474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39474, 'data-value': derived.doubled }, children);
}
export default Component39474;

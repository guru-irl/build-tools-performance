import React from 'react';
const LABEL_8957 = 'component_8957';
export function Component8957({ value = 8957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8957, 'data-value': derived.doubled }, children);
}
export default Component8957;

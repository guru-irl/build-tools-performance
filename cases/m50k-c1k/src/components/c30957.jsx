import React from 'react';
const LABEL_30957 = 'component_30957';
export function Component30957({ value = 30957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30957, 'data-value': derived.doubled }, children);
}
export default Component30957;

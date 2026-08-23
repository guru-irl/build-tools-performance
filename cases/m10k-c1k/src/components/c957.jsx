import React from 'react';
const LABEL_957 = 'component_957';
export function Component957({ value = 957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_957, 'data-value': derived.doubled }, children);
}
export default Component957;

import React from 'react';
const LABEL_1957 = 'component_1957';
export function Component1957({ value = 1957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1957, 'data-value': derived.doubled }, children);
}
export default Component1957;

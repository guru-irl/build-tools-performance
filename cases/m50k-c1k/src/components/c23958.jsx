import React from 'react';
const LABEL_23958 = 'component_23958';
export function Component23958({ value = 23958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23958, 'data-value': derived.doubled }, children);
}
export default Component23958;

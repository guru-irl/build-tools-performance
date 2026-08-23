import React from 'react';
const LABEL_41957 = 'component_41957';
export function Component41957({ value = 41957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41957, 'data-value': derived.doubled }, children);
}
export default Component41957;

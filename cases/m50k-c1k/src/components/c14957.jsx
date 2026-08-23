import React from 'react';
const LABEL_14957 = 'component_14957';
export function Component14957({ value = 14957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14957, 'data-value': derived.doubled }, children);
}
export default Component14957;

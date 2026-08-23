import React from 'react';
const LABEL_44957 = 'component_44957';
export function Component44957({ value = 44957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44957, 'data-value': derived.doubled }, children);
}
export default Component44957;

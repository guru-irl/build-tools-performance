import React from 'react';
const LABEL_10153 = 'component_10153';
export function Component10153({ value = 10153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10153, 'data-value': derived.doubled }, children);
}
export default Component10153;

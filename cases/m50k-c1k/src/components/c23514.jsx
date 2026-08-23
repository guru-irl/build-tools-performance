import React from 'react';
const LABEL_23514 = 'component_23514';
export function Component23514({ value = 23514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23514, 'data-value': derived.doubled }, children);
}
export default Component23514;

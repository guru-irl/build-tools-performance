import React from 'react';
const LABEL_17514 = 'component_17514';
export function Component17514({ value = 17514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17514, 'data-value': derived.doubled }, children);
}
export default Component17514;

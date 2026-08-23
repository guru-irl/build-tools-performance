import React from 'react';
const LABEL_28296 = 'component_28296';
export function Component28296({ value = 28296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28296, 'data-value': derived.doubled }, children);
}
export default Component28296;

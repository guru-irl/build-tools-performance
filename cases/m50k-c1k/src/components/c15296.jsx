import React from 'react';
const LABEL_15296 = 'component_15296';
export function Component15296({ value = 15296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15296, 'data-value': derived.doubled }, children);
}
export default Component15296;

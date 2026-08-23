import React from 'react';
const LABEL_40296 = 'component_40296';
export function Component40296({ value = 40296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40296, 'data-value': derived.doubled }, children);
}
export default Component40296;

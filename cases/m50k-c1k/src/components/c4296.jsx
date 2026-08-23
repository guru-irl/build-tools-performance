import React from 'react';
const LABEL_4296 = 'component_4296';
export function Component4296({ value = 4296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4296, 'data-value': derived.doubled }, children);
}
export default Component4296;

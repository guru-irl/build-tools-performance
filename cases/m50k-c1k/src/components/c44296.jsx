import React from 'react';
const LABEL_44296 = 'component_44296';
export function Component44296({ value = 44296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44296, 'data-value': derived.doubled }, children);
}
export default Component44296;

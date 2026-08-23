import React from 'react';
const LABEL_44236 = 'component_44236';
export function Component44236({ value = 44236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44236, 'data-value': derived.doubled }, children);
}
export default Component44236;

import React from 'react';
const LABEL_44181 = 'component_44181';
export function Component44181({ value = 44181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44181, 'data-value': derived.doubled }, children);
}
export default Component44181;

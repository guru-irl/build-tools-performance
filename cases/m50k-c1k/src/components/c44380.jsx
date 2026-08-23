import React from 'react';
const LABEL_44380 = 'component_44380';
export function Component44380({ value = 44380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44380, 'data-value': derived.doubled }, children);
}
export default Component44380;

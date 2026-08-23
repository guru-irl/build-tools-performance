import React from 'react';
const LABEL_44646 = 'component_44646';
export function Component44646({ value = 44646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44646, 'data-value': derived.doubled }, children);
}
export default Component44646;

import React from 'react';
const LABEL_28961 = 'component_28961';
export function Component28961({ value = 28961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28961, 'data-value': derived.doubled }, children);
}
export default Component28961;

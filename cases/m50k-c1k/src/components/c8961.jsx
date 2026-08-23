import React from 'react';
const LABEL_8961 = 'component_8961';
export function Component8961({ value = 8961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8961, 'data-value': derived.doubled }, children);
}
export default Component8961;

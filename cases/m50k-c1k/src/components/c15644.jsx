import React from 'react';
const LABEL_15644 = 'component_15644';
export function Component15644({ value = 15644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15644, 'data-value': derived.doubled }, children);
}
export default Component15644;

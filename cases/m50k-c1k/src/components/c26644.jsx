import React from 'react';
const LABEL_26644 = 'component_26644';
export function Component26644({ value = 26644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26644, 'data-value': derived.doubled }, children);
}
export default Component26644;

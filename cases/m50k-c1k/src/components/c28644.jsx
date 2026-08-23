import React from 'react';
const LABEL_28644 = 'component_28644';
export function Component28644({ value = 28644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28644, 'data-value': derived.doubled }, children);
}
export default Component28644;

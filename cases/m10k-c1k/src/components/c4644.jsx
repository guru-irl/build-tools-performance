import React from 'react';
const LABEL_4644 = 'component_4644';
export function Component4644({ value = 4644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4644, 'data-value': derived.doubled }, children);
}
export default Component4644;

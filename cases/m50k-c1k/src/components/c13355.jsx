import React from 'react';
const LABEL_13355 = 'component_13355';
export function Component13355({ value = 13355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13355, 'data-value': derived.doubled }, children);
}
export default Component13355;

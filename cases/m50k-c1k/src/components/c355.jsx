import React from 'react';
const LABEL_355 = 'component_355';
export function Component355({ value = 355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_355, 'data-value': derived.doubled }, children);
}
export default Component355;

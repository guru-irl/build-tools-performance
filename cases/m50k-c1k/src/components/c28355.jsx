import React from 'react';
const LABEL_28355 = 'component_28355';
export function Component28355({ value = 28355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28355, 'data-value': derived.doubled }, children);
}
export default Component28355;

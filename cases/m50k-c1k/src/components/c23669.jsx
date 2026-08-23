import React from 'react';
const LABEL_23669 = 'component_23669';
export function Component23669({ value = 23669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23669, 'data-value': derived.doubled }, children);
}
export default Component23669;

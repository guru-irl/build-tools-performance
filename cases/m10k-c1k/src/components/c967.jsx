import React from 'react';
const LABEL_967 = 'component_967';
export function Component967({ value = 967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_967, 'data-value': derived.doubled }, children);
}
export default Component967;

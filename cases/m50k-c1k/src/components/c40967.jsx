import React from 'react';
const LABEL_40967 = 'component_40967';
export function Component40967({ value = 40967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40967, 'data-value': derived.doubled }, children);
}
export default Component40967;

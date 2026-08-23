import React from 'react';
const LABEL_4967 = 'component_4967';
export function Component4967({ value = 4967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4967, 'data-value': derived.doubled }, children);
}
export default Component4967;

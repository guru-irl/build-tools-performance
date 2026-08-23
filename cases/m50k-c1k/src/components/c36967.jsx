import React from 'react';
const LABEL_36967 = 'component_36967';
export function Component36967({ value = 36967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36967, 'data-value': derived.doubled }, children);
}
export default Component36967;

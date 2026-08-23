import React from 'react';
const LABEL_26967 = 'component_26967';
export function Component26967({ value = 26967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26967, 'data-value': derived.doubled }, children);
}
export default Component26967;

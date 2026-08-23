import React from 'react';
const LABEL_23800 = 'component_23800';
export function Component23800({ value = 23800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23800, 'data-value': derived.doubled }, children);
}
export default Component23800;

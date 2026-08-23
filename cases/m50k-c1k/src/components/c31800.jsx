import React from 'react';
const LABEL_31800 = 'component_31800';
export function Component31800({ value = 31800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31800, 'data-value': derived.doubled }, children);
}
export default Component31800;

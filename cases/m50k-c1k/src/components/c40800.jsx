import React from 'react';
const LABEL_40800 = 'component_40800';
export function Component40800({ value = 40800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40800, 'data-value': derived.doubled }, children);
}
export default Component40800;

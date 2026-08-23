import React from 'react';
const LABEL_800 = 'component_800';
export function Component800({ value = 800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_800, 'data-value': derived.doubled }, children);
}
export default Component800;

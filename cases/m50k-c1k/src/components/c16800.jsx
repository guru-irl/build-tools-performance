import React from 'react';
const LABEL_16800 = 'component_16800';
export function Component16800({ value = 16800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16800, 'data-value': derived.doubled }, children);
}
export default Component16800;

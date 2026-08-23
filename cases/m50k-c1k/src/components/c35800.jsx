import React from 'react';
const LABEL_35800 = 'component_35800';
export function Component35800({ value = 35800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35800, 'data-value': derived.doubled }, children);
}
export default Component35800;

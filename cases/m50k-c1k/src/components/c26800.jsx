import React from 'react';
const LABEL_26800 = 'component_26800';
export function Component26800({ value = 26800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26800, 'data-value': derived.doubled }, children);
}
export default Component26800;

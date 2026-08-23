import React from 'react';
const LABEL_31647 = 'component_31647';
export function Component31647({ value = 31647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31647, 'data-value': derived.doubled }, children);
}
export default Component31647;

import React from 'react';
const LABEL_31234 = 'component_31234';
export function Component31234({ value = 31234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31234, 'data-value': derived.doubled }, children);
}
export default Component31234;

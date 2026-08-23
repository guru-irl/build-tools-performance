import React from 'react';
const LABEL_8768 = 'component_8768';
export function Component8768({ value = 8768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8768, 'data-value': derived.doubled }, children);
}
export default Component8768;

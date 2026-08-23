import React from 'react';
const LABEL_8340 = 'component_8340';
export function Component8340({ value = 8340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8340, 'data-value': derived.doubled }, children);
}
export default Component8340;

import React from 'react';
const LABEL_14291 = 'component_14291';
export function Component14291({ value = 14291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14291, 'data-value': derived.doubled }, children);
}
export default Component14291;

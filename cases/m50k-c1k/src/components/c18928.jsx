import React from 'react';
const LABEL_18928 = 'component_18928';
export function Component18928({ value = 18928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18928, 'data-value': derived.doubled }, children);
}
export default Component18928;

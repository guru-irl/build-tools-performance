import React from 'react';
const LABEL_16531 = 'component_16531';
export function Component16531({ value = 16531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16531, 'data-value': derived.doubled }, children);
}
export default Component16531;

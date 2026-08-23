import React from 'react';
const LABEL_31180 = 'component_31180';
export function Component31180({ value = 31180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31180, 'data-value': derived.doubled }, children);
}
export default Component31180;

import React from 'react';
const LABEL_31484 = 'component_31484';
export function Component31484({ value = 31484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31484, 'data-value': derived.doubled }, children);
}
export default Component31484;

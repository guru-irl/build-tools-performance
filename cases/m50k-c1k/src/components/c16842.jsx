import React from 'react';
const LABEL_16842 = 'component_16842';
export function Component16842({ value = 16842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16842, 'data-value': derived.doubled }, children);
}
export default Component16842;

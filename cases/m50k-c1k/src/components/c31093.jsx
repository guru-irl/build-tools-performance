import React from 'react';
const LABEL_31093 = 'component_31093';
export function Component31093({ value = 31093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31093, 'data-value': derived.doubled }, children);
}
export default Component31093;

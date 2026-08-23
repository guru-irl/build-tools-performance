import React from 'react';
const LABEL_38227 = 'component_38227';
export function Component38227({ value = 38227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38227, 'data-value': derived.doubled }, children);
}
export default Component38227;

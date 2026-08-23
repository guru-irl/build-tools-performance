import React from 'react';
const LABEL_23227 = 'component_23227';
export function Component23227({ value = 23227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23227, 'data-value': derived.doubled }, children);
}
export default Component23227;

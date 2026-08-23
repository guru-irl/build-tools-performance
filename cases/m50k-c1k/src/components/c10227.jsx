import React from 'react';
const LABEL_10227 = 'component_10227';
export function Component10227({ value = 10227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10227, 'data-value': derived.doubled }, children);
}
export default Component10227;

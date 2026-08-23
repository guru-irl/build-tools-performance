import React from 'react';
const LABEL_33227 = 'component_33227';
export function Component33227({ value = 33227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33227, 'data-value': derived.doubled }, children);
}
export default Component33227;

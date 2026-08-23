import React from 'react';
const LABEL_26227 = 'component_26227';
export function Component26227({ value = 26227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26227, 'data-value': derived.doubled }, children);
}
export default Component26227;

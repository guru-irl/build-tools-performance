import React from 'react';
const LABEL_15227 = 'component_15227';
export function Component15227({ value = 15227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15227, 'data-value': derived.doubled }, children);
}
export default Component15227;

import React from 'react';
const LABEL_28227 = 'component_28227';
export function Component28227({ value = 28227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28227, 'data-value': derived.doubled }, children);
}
export default Component28227;

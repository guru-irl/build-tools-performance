import React from 'react';
const LABEL_11227 = 'component_11227';
export function Component11227({ value = 11227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11227, 'data-value': derived.doubled }, children);
}
export default Component11227;

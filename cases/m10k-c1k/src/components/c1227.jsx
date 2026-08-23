import React from 'react';
const LABEL_1227 = 'component_1227';
export function Component1227({ value = 1227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1227, 'data-value': derived.doubled }, children);
}
export default Component1227;

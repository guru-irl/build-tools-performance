import React from 'react';
const LABEL_7227 = 'component_7227';
export function Component7227({ value = 7227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7227, 'data-value': derived.doubled }, children);
}
export default Component7227;

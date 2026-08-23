import React from 'react';
const LABEL_31351 = 'component_31351';
export function Component31351({ value = 31351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31351, 'data-value': derived.doubled }, children);
}
export default Component31351;

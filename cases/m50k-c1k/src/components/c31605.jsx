import React from 'react';
const LABEL_31605 = 'component_31605';
export function Component31605({ value = 31605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31605, 'data-value': derived.doubled }, children);
}
export default Component31605;

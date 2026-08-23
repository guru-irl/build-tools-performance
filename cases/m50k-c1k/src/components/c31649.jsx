import React from 'react';
const LABEL_31649 = 'component_31649';
export function Component31649({ value = 31649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31649, 'data-value': derived.doubled }, children);
}
export default Component31649;

import React from 'react';
const LABEL_31571 = 'component_31571';
export function Component31571({ value = 31571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31571, 'data-value': derived.doubled }, children);
}
export default Component31571;

import React from 'react';
const LABEL_7096 = 'component_7096';
export function Component7096({ value = 7096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7096, 'data-value': derived.doubled }, children);
}
export default Component7096;

import React from 'react';
const LABEL_15667 = 'component_15667';
export function Component15667({ value = 15667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15667, 'data-value': derived.doubled }, children);
}
export default Component15667;

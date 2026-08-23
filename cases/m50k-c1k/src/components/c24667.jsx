import React from 'react';
const LABEL_24667 = 'component_24667';
export function Component24667({ value = 24667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24667, 'data-value': derived.doubled }, children);
}
export default Component24667;

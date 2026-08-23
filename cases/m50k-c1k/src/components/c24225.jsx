import React from 'react';
const LABEL_24225 = 'component_24225';
export function Component24225({ value = 24225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24225, 'data-value': derived.doubled }, children);
}
export default Component24225;

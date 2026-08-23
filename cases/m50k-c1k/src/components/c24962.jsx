import React from 'react';
const LABEL_24962 = 'component_24962';
export function Component24962({ value = 24962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24962, 'data-value': derived.doubled }, children);
}
export default Component24962;

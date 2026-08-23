import React from 'react';
const LABEL_24425 = 'component_24425';
export function Component24425({ value = 24425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24425, 'data-value': derived.doubled }, children);
}
export default Component24425;

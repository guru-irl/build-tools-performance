import React from 'react';
const LABEL_24376 = 'component_24376';
export function Component24376({ value = 24376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24376, 'data-value': derived.doubled }, children);
}
export default Component24376;

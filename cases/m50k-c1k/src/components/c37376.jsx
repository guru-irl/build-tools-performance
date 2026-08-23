import React from 'react';
const LABEL_37376 = 'component_37376';
export function Component37376({ value = 37376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37376, 'data-value': derived.doubled }, children);
}
export default Component37376;

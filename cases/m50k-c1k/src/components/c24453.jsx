import React from 'react';
const LABEL_24453 = 'component_24453';
export function Component24453({ value = 24453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24453, 'data-value': derived.doubled }, children);
}
export default Component24453;

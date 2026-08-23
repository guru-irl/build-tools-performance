import React from 'react';
const LABEL_15237 = 'component_15237';
export function Component15237({ value = 15237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15237, 'data-value': derived.doubled }, children);
}
export default Component15237;

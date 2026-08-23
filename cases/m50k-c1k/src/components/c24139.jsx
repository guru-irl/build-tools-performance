import React from 'react';
const LABEL_24139 = 'component_24139';
export function Component24139({ value = 24139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24139, 'data-value': derived.doubled }, children);
}
export default Component24139;

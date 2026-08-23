import React from 'react';
const LABEL_12139 = 'component_12139';
export function Component12139({ value = 12139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12139, 'data-value': derived.doubled }, children);
}
export default Component12139;

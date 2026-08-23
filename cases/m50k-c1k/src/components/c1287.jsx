import React from 'react';
const LABEL_1287 = 'component_1287';
export function Component1287({ value = 1287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1287, 'data-value': derived.doubled }, children);
}
export default Component1287;

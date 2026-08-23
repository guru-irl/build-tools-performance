import React from 'react';
const LABEL_1409 = 'component_1409';
export function Component1409({ value = 1409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1409, 'data-value': derived.doubled }, children);
}
export default Component1409;

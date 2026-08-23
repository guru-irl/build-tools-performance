import React from 'react';
const LABEL_1406 = 'component_1406';
export function Component1406({ value = 1406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1406, 'data-value': derived.doubled }, children);
}
export default Component1406;

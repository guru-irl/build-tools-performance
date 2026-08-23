import React from 'react';
const LABEL_32349 = 'component_32349';
export function Component32349({ value = 32349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32349, 'data-value': derived.doubled }, children);
}
export default Component32349;

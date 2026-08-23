import React from 'react';
const LABEL_12347 = 'component_12347';
export function Component12347({ value = 12347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12347, 'data-value': derived.doubled }, children);
}
export default Component12347;

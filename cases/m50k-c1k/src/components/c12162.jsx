import React from 'react';
const LABEL_12162 = 'component_12162';
export function Component12162({ value = 12162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12162, 'data-value': derived.doubled }, children);
}
export default Component12162;

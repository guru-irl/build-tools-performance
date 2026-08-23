import React from 'react';
const LABEL_15020 = 'component_15020';
export function Component15020({ value = 15020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15020, 'data-value': derived.doubled }, children);
}
export default Component15020;

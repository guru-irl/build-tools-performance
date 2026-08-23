import React from 'react';
const LABEL_42554 = 'component_42554';
export function Component42554({ value = 42554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42554, 'data-value': derived.doubled }, children);
}
export default Component42554;

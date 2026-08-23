import React from 'react';
const LABEL_42287 = 'component_42287';
export function Component42287({ value = 42287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42287, 'data-value': derived.doubled }, children);
}
export default Component42287;

import React from 'react';
const LABEL_10593 = 'component_10593';
export function Component10593({ value = 10593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10593, 'data-value': derived.doubled }, children);
}
export default Component10593;

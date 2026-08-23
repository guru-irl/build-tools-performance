import React from 'react';
const LABEL_11722 = 'component_11722';
export function Component11722({ value = 11722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11722, 'data-value': derived.doubled }, children);
}
export default Component11722;

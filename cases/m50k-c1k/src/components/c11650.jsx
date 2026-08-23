import React from 'react';
const LABEL_11650 = 'component_11650';
export function Component11650({ value = 11650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11650, 'data-value': derived.doubled }, children);
}
export default Component11650;

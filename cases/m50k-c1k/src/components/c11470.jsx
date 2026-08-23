import React from 'react';
const LABEL_11470 = 'component_11470';
export function Component11470({ value = 11470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11470, 'data-value': derived.doubled }, children);
}
export default Component11470;

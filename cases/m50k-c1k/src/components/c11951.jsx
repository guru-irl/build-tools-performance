import React from 'react';
const LABEL_11951 = 'component_11951';
export function Component11951({ value = 11951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11951, 'data-value': derived.doubled }, children);
}
export default Component11951;

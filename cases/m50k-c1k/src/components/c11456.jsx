import React from 'react';
const LABEL_11456 = 'component_11456';
export function Component11456({ value = 11456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11456, 'data-value': derived.doubled }, children);
}
export default Component11456;

import React from 'react';
const LABEL_11622 = 'component_11622';
export function Component11622({ value = 11622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11622, 'data-value': derived.doubled }, children);
}
export default Component11622;

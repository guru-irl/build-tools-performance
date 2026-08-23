import React from 'react';
const LABEL_11290 = 'component_11290';
export function Component11290({ value = 11290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11290, 'data-value': derived.doubled }, children);
}
export default Component11290;

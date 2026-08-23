import React from 'react';
const LABEL_24004 = 'component_24004';
export function Component24004({ value = 24004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24004, 'data-value': derived.doubled }, children);
}
export default Component24004;

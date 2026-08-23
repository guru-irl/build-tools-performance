import React from 'react';
const LABEL_29490 = 'component_29490';
export function Component29490({ value = 29490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29490, 'data-value': derived.doubled }, children);
}
export default Component29490;

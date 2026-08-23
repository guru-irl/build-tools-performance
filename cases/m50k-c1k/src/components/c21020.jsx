import React from 'react';
const LABEL_21020 = 'component_21020';
export function Component21020({ value = 21020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21020, 'data-value': derived.doubled }, children);
}
export default Component21020;

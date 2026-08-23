import React from 'react';
const LABEL_13649 = 'component_13649';
export function Component13649({ value = 13649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13649, 'data-value': derived.doubled }, children);
}
export default Component13649;

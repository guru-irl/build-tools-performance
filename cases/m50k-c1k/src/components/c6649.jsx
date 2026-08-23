import React from 'react';
const LABEL_6649 = 'component_6649';
export function Component6649({ value = 6649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6649, 'data-value': derived.doubled }, children);
}
export default Component6649;

import React from 'react';
const LABEL_6593 = 'component_6593';
export function Component6593({ value = 6593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6593, 'data-value': derived.doubled }, children);
}
export default Component6593;

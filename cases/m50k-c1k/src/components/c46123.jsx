import React from 'react';
const LABEL_46123 = 'component_46123';
export function Component46123({ value = 46123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46123, 'data-value': derived.doubled }, children);
}
export default Component46123;

import React from 'react';
const LABEL_7345 = 'component_7345';
export function Component7345({ value = 7345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7345, 'data-value': derived.doubled }, children);
}
export default Component7345;

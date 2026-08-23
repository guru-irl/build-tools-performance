import React from 'react';
const LABEL_23522 = 'component_23522';
export function Component23522({ value = 23522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23522, 'data-value': derived.doubled }, children);
}
export default Component23522;

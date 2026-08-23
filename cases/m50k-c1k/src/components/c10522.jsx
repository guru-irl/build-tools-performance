import React from 'react';
const LABEL_10522 = 'component_10522';
export function Component10522({ value = 10522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10522, 'data-value': derived.doubled }, children);
}
export default Component10522;

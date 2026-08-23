import React from 'react';
const LABEL_5522 = 'component_5522';
export function Component5522({ value = 5522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5522, 'data-value': derived.doubled }, children);
}
export default Component5522;

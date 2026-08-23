import React from 'react';
const LABEL_6522 = 'component_6522';
export function Component6522({ value = 6522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6522, 'data-value': derived.doubled }, children);
}
export default Component6522;

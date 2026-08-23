import React from 'react';
const LABEL_32522 = 'component_32522';
export function Component32522({ value = 32522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32522, 'data-value': derived.doubled }, children);
}
export default Component32522;

import React from 'react';
const LABEL_29111 = 'component_29111';
export function Component29111({ value = 29111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29111, 'data-value': derived.doubled }, children);
}
export default Component29111;

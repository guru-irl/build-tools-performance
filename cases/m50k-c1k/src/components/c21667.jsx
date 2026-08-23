import React from 'react';
const LABEL_21667 = 'component_21667';
export function Component21667({ value = 21667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21667, 'data-value': derived.doubled }, children);
}
export default Component21667;

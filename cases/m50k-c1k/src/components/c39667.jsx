import React from 'react';
const LABEL_39667 = 'component_39667';
export function Component39667({ value = 39667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39667, 'data-value': derived.doubled }, children);
}
export default Component39667;

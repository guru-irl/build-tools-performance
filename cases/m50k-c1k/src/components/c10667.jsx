import React from 'react';
const LABEL_10667 = 'component_10667';
export function Component10667({ value = 10667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10667, 'data-value': derived.doubled }, children);
}
export default Component10667;

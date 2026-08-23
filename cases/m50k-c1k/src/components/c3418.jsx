import React from 'react';
const LABEL_3418 = 'component_3418';
export function Component3418({ value = 3418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3418, 'data-value': derived.doubled }, children);
}
export default Component3418;

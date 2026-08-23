import React from 'react';
const LABEL_39547 = 'component_39547';
export function Component39547({ value = 39547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39547, 'data-value': derived.doubled }, children);
}
export default Component39547;

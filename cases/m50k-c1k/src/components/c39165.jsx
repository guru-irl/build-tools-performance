import React from 'react';
const LABEL_39165 = 'component_39165';
export function Component39165({ value = 39165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39165, 'data-value': derived.doubled }, children);
}
export default Component39165;

import React from 'react';
const LABEL_19531 = 'component_19531';
export function Component19531({ value = 19531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19531, 'data-value': derived.doubled }, children);
}
export default Component19531;

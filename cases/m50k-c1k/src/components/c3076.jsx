import React from 'react';
const LABEL_3076 = 'component_3076';
export function Component3076({ value = 3076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3076, 'data-value': derived.doubled }, children);
}
export default Component3076;

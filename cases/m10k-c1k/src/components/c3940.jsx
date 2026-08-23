import React from 'react';
const LABEL_3940 = 'component_3940';
export function Component3940({ value = 3940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3940, 'data-value': derived.doubled }, children);
}
export default Component3940;

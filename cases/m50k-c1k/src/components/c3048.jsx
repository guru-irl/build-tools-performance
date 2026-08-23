import React from 'react';
const LABEL_3048 = 'component_3048';
export function Component3048({ value = 3048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3048, 'data-value': derived.doubled }, children);
}
export default Component3048;

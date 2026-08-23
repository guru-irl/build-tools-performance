import React from 'react';
const LABEL_3189 = 'component_3189';
export function Component3189({ value = 3189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3189, 'data-value': derived.doubled }, children);
}
export default Component3189;

import React from 'react';
const LABEL_3303 = 'component_3303';
export function Component3303({ value = 3303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3303, 'data-value': derived.doubled }, children);
}
export default Component3303;

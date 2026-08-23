import React from 'react';
const LABEL_3577 = 'component_3577';
export function Component3577({ value = 3577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3577, 'data-value': derived.doubled }, children);
}
export default Component3577;

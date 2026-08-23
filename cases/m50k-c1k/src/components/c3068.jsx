import React from 'react';
const LABEL_3068 = 'component_3068';
export function Component3068({ value = 3068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3068, 'data-value': derived.doubled }, children);
}
export default Component3068;

import React from 'react';
const LABEL_3858 = 'component_3858';
export function Component3858({ value = 3858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3858, 'data-value': derived.doubled }, children);
}
export default Component3858;

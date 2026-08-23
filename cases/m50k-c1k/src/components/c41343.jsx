import React from 'react';
const LABEL_41343 = 'component_41343';
export function Component41343({ value = 41343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41343, 'data-value': derived.doubled }, children);
}
export default Component41343;

import React from 'react';
const LABEL_41718 = 'component_41718';
export function Component41718({ value = 41718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41718, 'data-value': derived.doubled }, children);
}
export default Component41718;

import React from 'react';
const LABEL_41608 = 'component_41608';
export function Component41608({ value = 41608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41608, 'data-value': derived.doubled }, children);
}
export default Component41608;

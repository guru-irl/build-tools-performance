import React from 'react';
const LABEL_41582 = 'component_41582';
export function Component41582({ value = 41582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41582, 'data-value': derived.doubled }, children);
}
export default Component41582;

import React from 'react';
const LABEL_41926 = 'component_41926';
export function Component41926({ value = 41926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41926, 'data-value': derived.doubled }, children);
}
export default Component41926;

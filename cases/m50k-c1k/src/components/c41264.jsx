import React from 'react';
const LABEL_41264 = 'component_41264';
export function Component41264({ value = 41264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41264, 'data-value': derived.doubled }, children);
}
export default Component41264;

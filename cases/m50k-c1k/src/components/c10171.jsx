import React from 'react';
const LABEL_10171 = 'component_10171';
export function Component10171({ value = 10171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10171, 'data-value': derived.doubled }, children);
}
export default Component10171;

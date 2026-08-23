import React from 'react';
const LABEL_40409 = 'component_40409';
export function Component40409({ value = 40409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40409, 'data-value': derived.doubled }, children);
}
export default Component40409;

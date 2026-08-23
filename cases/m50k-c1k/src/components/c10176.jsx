import React from 'react';
const LABEL_10176 = 'component_10176';
export function Component10176({ value = 10176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10176, 'data-value': derived.doubled }, children);
}
export default Component10176;

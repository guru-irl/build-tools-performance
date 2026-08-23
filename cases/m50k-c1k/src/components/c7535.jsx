import React from 'react';
const LABEL_7535 = 'component_7535';
export function Component7535({ value = 7535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7535, 'data-value': derived.doubled }, children);
}
export default Component7535;

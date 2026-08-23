import React from 'react';
const LABEL_32416 = 'component_32416';
export function Component32416({ value = 32416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32416, 'data-value': derived.doubled }, children);
}
export default Component32416;

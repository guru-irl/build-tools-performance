import React from 'react';
const LABEL_2096 = 'component_2096';
export function Component2096({ value = 2096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2096, 'data-value': derived.doubled }, children);
}
export default Component2096;

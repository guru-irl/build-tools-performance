import React from 'react';
const LABEL_22033 = 'component_22033';
export function Component22033({ value = 22033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22033, 'data-value': derived.doubled }, children);
}
export default Component22033;

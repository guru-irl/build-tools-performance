import React from 'react';
const LABEL_29485 = 'component_29485';
export function Component29485({ value = 29485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29485, 'data-value': derived.doubled }, children);
}
export default Component29485;

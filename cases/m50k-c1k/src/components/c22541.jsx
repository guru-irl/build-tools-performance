import React from 'react';
const LABEL_22541 = 'component_22541';
export function Component22541({ value = 22541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22541, 'data-value': derived.doubled }, children);
}
export default Component22541;

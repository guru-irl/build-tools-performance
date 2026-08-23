import React from 'react';
const LABEL_1016 = 'component_1016';
export function Component1016({ value = 1016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1016, 'data-value': derived.doubled }, children);
}
export default Component1016;

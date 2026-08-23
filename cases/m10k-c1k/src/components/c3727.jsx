import React from 'react';
const LABEL_3727 = 'component_3727';
export function Component3727({ value = 3727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3727, 'data-value': derived.doubled }, children);
}
export default Component3727;

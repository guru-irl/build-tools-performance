import React from 'react';
const LABEL_10727 = 'component_10727';
export function Component10727({ value = 10727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10727, 'data-value': derived.doubled }, children);
}
export default Component10727;

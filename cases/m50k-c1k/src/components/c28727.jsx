import React from 'react';
const LABEL_28727 = 'component_28727';
export function Component28727({ value = 28727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28727, 'data-value': derived.doubled }, children);
}
export default Component28727;

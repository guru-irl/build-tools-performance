import React from 'react';
const LABEL_22727 = 'component_22727';
export function Component22727({ value = 22727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22727, 'data-value': derived.doubled }, children);
}
export default Component22727;

import React from 'react';
const LABEL_6727 = 'component_6727';
export function Component6727({ value = 6727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6727, 'data-value': derived.doubled }, children);
}
export default Component6727;

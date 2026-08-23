import React from 'react';
const LABEL_26727 = 'component_26727';
export function Component26727({ value = 26727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26727, 'data-value': derived.doubled }, children);
}
export default Component26727;

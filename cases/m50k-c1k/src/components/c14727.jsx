import React from 'react';
const LABEL_14727 = 'component_14727';
export function Component14727({ value = 14727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14727, 'data-value': derived.doubled }, children);
}
export default Component14727;

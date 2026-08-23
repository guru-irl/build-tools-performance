import React from 'react';
const LABEL_39727 = 'component_39727';
export function Component39727({ value = 39727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39727, 'data-value': derived.doubled }, children);
}
export default Component39727;

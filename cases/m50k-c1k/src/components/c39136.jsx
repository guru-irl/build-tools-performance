import React from 'react';
const LABEL_39136 = 'component_39136';
export function Component39136({ value = 39136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39136, 'data-value': derived.doubled }, children);
}
export default Component39136;

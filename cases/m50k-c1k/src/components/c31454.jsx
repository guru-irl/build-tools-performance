import React from 'react';
const LABEL_31454 = 'component_31454';
export function Component31454({ value = 31454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31454, 'data-value': derived.doubled }, children);
}
export default Component31454;

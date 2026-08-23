import React from 'react';
const LABEL_32335 = 'component_32335';
export function Component32335({ value = 32335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32335, 'data-value': derived.doubled }, children);
}
export default Component32335;

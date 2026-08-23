import React from 'react';
const LABEL_10335 = 'component_10335';
export function Component10335({ value = 10335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10335, 'data-value': derived.doubled }, children);
}
export default Component10335;

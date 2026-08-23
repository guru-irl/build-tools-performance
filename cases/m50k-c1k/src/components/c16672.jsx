import React from 'react';
const LABEL_16672 = 'component_16672';
export function Component16672({ value = 16672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16672, 'data-value': derived.doubled }, children);
}
export default Component16672;

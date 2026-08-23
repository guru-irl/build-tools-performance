import React from 'react';
const LABEL_24187 = 'component_24187';
export function Component24187({ value = 24187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24187, 'data-value': derived.doubled }, children);
}
export default Component24187;

import React from 'react';
const LABEL_24216 = 'component_24216';
export function Component24216({ value = 24216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24216, 'data-value': derived.doubled }, children);
}
export default Component24216;

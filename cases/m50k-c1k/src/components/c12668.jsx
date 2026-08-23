import React from 'react';
const LABEL_12668 = 'component_12668';
export function Component12668({ value = 12668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12668, 'data-value': derived.doubled }, children);
}
export default Component12668;

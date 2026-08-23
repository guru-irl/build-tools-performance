import React from 'react';
const LABEL_10755 = 'component_10755';
export function Component10755({ value = 10755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10755, 'data-value': derived.doubled }, children);
}
export default Component10755;

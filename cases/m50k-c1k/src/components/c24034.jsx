import React from 'react';
const LABEL_24034 = 'component_24034';
export function Component24034({ value = 24034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24034, 'data-value': derived.doubled }, children);
}
export default Component24034;

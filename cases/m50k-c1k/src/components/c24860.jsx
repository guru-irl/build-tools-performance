import React from 'react';
const LABEL_24860 = 'component_24860';
export function Component24860({ value = 24860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24860, 'data-value': derived.doubled }, children);
}
export default Component24860;

import React from 'react';
const LABEL_16396 = 'component_16396';
export function Component16396({ value = 16396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16396, 'data-value': derived.doubled }, children);
}
export default Component16396;

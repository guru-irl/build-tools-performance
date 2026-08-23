import React from 'react';
const LABEL_32554 = 'component_32554';
export function Component32554({ value = 32554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32554, 'data-value': derived.doubled }, children);
}
export default Component32554;

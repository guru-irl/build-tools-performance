import React from 'react';
const LABEL_6554 = 'component_6554';
export function Component6554({ value = 6554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6554, 'data-value': derived.doubled }, children);
}
export default Component6554;

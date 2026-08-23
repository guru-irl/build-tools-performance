import React from 'react';
const LABEL_33575 = 'component_33575';
export function Component33575({ value = 33575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33575, 'data-value': derived.doubled }, children);
}
export default Component33575;

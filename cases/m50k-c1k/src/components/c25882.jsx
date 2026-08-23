import React from 'react';
const LABEL_25882 = 'component_25882';
export function Component25882({ value = 25882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25882, 'data-value': derived.doubled }, children);
}
export default Component25882;

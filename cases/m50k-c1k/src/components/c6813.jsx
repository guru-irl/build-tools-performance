import React from 'react';
const LABEL_6813 = 'component_6813';
export function Component6813({ value = 6813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6813, 'data-value': derived.doubled }, children);
}
export default Component6813;

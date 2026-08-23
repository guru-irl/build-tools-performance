import React from 'react';
const LABEL_26345 = 'component_26345';
export function Component26345({ value = 26345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26345, 'data-value': derived.doubled }, children);
}
export default Component26345;

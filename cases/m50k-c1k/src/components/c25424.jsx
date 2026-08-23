import React from 'react';
const LABEL_25424 = 'component_25424';
export function Component25424({ value = 25424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25424, 'data-value': derived.doubled }, children);
}
export default Component25424;

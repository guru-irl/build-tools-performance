import React from 'react';
const LABEL_25568 = 'component_25568';
export function Component25568({ value = 25568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25568, 'data-value': derived.doubled }, children);
}
export default Component25568;

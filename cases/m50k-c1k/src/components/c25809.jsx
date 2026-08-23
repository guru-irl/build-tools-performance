import React from 'react';
const LABEL_25809 = 'component_25809';
export function Component25809({ value = 25809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25809, 'data-value': derived.doubled }, children);
}
export default Component25809;

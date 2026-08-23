import React from 'react';
const LABEL_25927 = 'component_25927';
export function Component25927({ value = 25927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25927, 'data-value': derived.doubled }, children);
}
export default Component25927;

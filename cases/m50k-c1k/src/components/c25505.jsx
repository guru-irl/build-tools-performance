import React from 'react';
const LABEL_25505 = 'component_25505';
export function Component25505({ value = 25505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25505, 'data-value': derived.doubled }, children);
}
export default Component25505;

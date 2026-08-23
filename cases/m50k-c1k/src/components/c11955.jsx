import React from 'react';
const LABEL_11955 = 'component_11955';
export function Component11955({ value = 11955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11955, 'data-value': derived.doubled }, children);
}
export default Component11955;

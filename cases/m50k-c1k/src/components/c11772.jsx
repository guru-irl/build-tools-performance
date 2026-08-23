import React from 'react';
const LABEL_11772 = 'component_11772';
export function Component11772({ value = 11772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11772, 'data-value': derived.doubled }, children);
}
export default Component11772;

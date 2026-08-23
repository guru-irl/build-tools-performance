import React from 'react';
const LABEL_25953 = 'component_25953';
export function Component25953({ value = 25953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25953, 'data-value': derived.doubled }, children);
}
export default Component25953;

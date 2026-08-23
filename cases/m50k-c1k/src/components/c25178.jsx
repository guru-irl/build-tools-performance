import React from 'react';
const LABEL_25178 = 'component_25178';
export function Component25178({ value = 25178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25178, 'data-value': derived.doubled }, children);
}
export default Component25178;

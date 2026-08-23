import React from 'react';
const LABEL_26495 = 'component_26495';
export function Component26495({ value = 26495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26495, 'data-value': derived.doubled }, children);
}
export default Component26495;

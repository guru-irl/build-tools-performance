import React from 'react';
const LABEL_29603 = 'component_29603';
export function Component29603({ value = 29603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29603, 'data-value': derived.doubled }, children);
}
export default Component29603;

import React from 'react';
const LABEL_19817 = 'component_19817';
export function Component19817({ value = 19817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19817, 'data-value': derived.doubled }, children);
}
export default Component19817;

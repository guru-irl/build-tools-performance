import React from 'react';
const LABEL_3505 = 'component_3505';
export function Component3505({ value = 3505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3505, 'data-value': derived.doubled }, children);
}
export default Component3505;

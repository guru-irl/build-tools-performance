import React from 'react';
const LABEL_29624 = 'component_29624';
export function Component29624({ value = 29624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29624, 'data-value': derived.doubled }, children);
}
export default Component29624;

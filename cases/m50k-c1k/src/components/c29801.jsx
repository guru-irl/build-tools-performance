import React from 'react';
const LABEL_29801 = 'component_29801';
export function Component29801({ value = 29801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29801, 'data-value': derived.doubled }, children);
}
export default Component29801;

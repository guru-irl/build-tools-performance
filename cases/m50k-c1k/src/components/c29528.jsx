import React from 'react';
const LABEL_29528 = 'component_29528';
export function Component29528({ value = 29528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29528, 'data-value': derived.doubled }, children);
}
export default Component29528;

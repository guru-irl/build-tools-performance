import React from 'react';
const LABEL_24833 = 'component_24833';
export function Component24833({ value = 24833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24833, 'data-value': derived.doubled }, children);
}
export default Component24833;

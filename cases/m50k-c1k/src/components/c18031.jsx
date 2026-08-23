import React from 'react';
const LABEL_18031 = 'component_18031';
export function Component18031({ value = 18031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18031, 'data-value': derived.doubled }, children);
}
export default Component18031;

import React from 'react';
const LABEL_21302 = 'component_21302';
export function Component21302({ value = 21302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21302, 'data-value': derived.doubled }, children);
}
export default Component21302;

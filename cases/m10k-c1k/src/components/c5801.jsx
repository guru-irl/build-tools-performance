import React from 'react';
const LABEL_5801 = 'component_5801';
export function Component5801({ value = 5801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5801, 'data-value': derived.doubled }, children);
}
export default Component5801;

import React from 'react';
const LABEL_38066 = 'component_38066';
export function Component38066({ value = 38066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38066, 'data-value': derived.doubled }, children);
}
export default Component38066;

import React from 'react';
const LABEL_33066 = 'component_33066';
export function Component33066({ value = 33066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33066, 'data-value': derived.doubled }, children);
}
export default Component33066;

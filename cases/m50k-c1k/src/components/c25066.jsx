import React from 'react';
const LABEL_25066 = 'component_25066';
export function Component25066({ value = 25066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25066, 'data-value': derived.doubled }, children);
}
export default Component25066;

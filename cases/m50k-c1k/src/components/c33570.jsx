import React from 'react';
const LABEL_33570 = 'component_33570';
export function Component33570({ value = 33570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33570, 'data-value': derived.doubled }, children);
}
export default Component33570;

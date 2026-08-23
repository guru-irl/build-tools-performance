import React from 'react';
const LABEL_33610 = 'component_33610';
export function Component33610({ value = 33610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33610, 'data-value': derived.doubled }, children);
}
export default Component33610;

import React from 'react';
const LABEL_14216 = 'component_14216';
export function Component14216({ value = 14216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14216, 'data-value': derived.doubled }, children);
}
export default Component14216;

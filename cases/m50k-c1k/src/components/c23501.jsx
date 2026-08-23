import React from 'react';
const LABEL_23501 = 'component_23501';
export function Component23501({ value = 23501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23501, 'data-value': derived.doubled }, children);
}
export default Component23501;

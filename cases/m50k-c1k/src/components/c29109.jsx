import React from 'react';
const LABEL_29109 = 'component_29109';
export function Component29109({ value = 29109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29109, 'data-value': derived.doubled }, children);
}
export default Component29109;

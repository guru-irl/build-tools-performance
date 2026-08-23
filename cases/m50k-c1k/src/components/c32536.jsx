import React from 'react';
const LABEL_32536 = 'component_32536';
export function Component32536({ value = 32536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32536, 'data-value': derived.doubled }, children);
}
export default Component32536;

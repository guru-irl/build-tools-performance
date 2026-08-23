import React from 'react';
const LABEL_32184 = 'component_32184';
export function Component32184({ value = 32184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32184, 'data-value': derived.doubled }, children);
}
export default Component32184;

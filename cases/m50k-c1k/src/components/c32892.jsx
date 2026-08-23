import React from 'react';
const LABEL_32892 = 'component_32892';
export function Component32892({ value = 32892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32892, 'data-value': derived.doubled }, children);
}
export default Component32892;

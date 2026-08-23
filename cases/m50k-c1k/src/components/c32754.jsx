import React from 'react';
const LABEL_32754 = 'component_32754';
export function Component32754({ value = 32754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32754, 'data-value': derived.doubled }, children);
}
export default Component32754;

import React from 'react';
const LABEL_31201 = 'component_31201';
export function Component31201({ value = 31201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31201, 'data-value': derived.doubled }, children);
}
export default Component31201;

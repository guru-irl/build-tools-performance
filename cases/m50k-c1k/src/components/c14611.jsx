import React from 'react';
const LABEL_14611 = 'component_14611';
export function Component14611({ value = 14611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14611, 'data-value': derived.doubled }, children);
}
export default Component14611;

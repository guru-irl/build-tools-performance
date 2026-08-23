import React from 'react';
const LABEL_14231 = 'component_14231';
export function Component14231({ value = 14231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14231, 'data-value': derived.doubled }, children);
}
export default Component14231;

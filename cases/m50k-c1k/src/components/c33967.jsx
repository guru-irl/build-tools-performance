import React from 'react';
const LABEL_33967 = 'component_33967';
export function Component33967({ value = 33967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33967, 'data-value': derived.doubled }, children);
}
export default Component33967;

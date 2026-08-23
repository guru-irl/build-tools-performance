import React from 'react';
const LABEL_14855 = 'component_14855';
export function Component14855({ value = 14855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14855, 'data-value': derived.doubled }, children);
}
export default Component14855;

import React from 'react';
const LABEL_33097 = 'component_33097';
export function Component33097({ value = 33097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33097, 'data-value': derived.doubled }, children);
}
export default Component33097;

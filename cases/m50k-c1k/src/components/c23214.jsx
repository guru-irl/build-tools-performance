import React from 'react';
const LABEL_23214 = 'component_23214';
export function Component23214({ value = 23214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23214, 'data-value': derived.doubled }, children);
}
export default Component23214;

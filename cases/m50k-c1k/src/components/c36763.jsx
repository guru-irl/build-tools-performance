import React from 'react';
const LABEL_36763 = 'component_36763';
export function Component36763({ value = 36763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36763, 'data-value': derived.doubled }, children);
}
export default Component36763;

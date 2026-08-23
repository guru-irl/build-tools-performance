import React from 'react';
const LABEL_6763 = 'component_6763';
export function Component6763({ value = 6763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6763, 'data-value': derived.doubled }, children);
}
export default Component6763;

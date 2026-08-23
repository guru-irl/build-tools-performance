import React from 'react';
const LABEL_22097 = 'component_22097';
export function Component22097({ value = 22097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22097, 'data-value': derived.doubled }, children);
}
export default Component22097;

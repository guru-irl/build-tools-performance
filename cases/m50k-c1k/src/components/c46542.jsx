import React from 'react';
const LABEL_46542 = 'component_46542';
export function Component46542({ value = 46542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46542, 'data-value': derived.doubled }, children);
}
export default Component46542;

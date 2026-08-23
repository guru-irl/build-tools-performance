import React from 'react';
const LABEL_46211 = 'component_46211';
export function Component46211({ value = 46211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46211, 'data-value': derived.doubled }, children);
}
export default Component46211;

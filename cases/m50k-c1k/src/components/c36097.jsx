import React from 'react';
const LABEL_36097 = 'component_36097';
export function Component36097({ value = 36097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36097, 'data-value': derived.doubled }, children);
}
export default Component36097;

import React from 'react';
const LABEL_10129 = 'component_10129';
export function Component10129({ value = 10129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10129, 'data-value': derived.doubled }, children);
}
export default Component10129;

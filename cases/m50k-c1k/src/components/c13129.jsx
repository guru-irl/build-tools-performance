import React from 'react';
const LABEL_13129 = 'component_13129';
export function Component13129({ value = 13129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13129, 'data-value': derived.doubled }, children);
}
export default Component13129;

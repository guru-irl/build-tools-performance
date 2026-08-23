import React from 'react';
const LABEL_32146 = 'component_32146';
export function Component32146({ value = 32146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32146, 'data-value': derived.doubled }, children);
}
export default Component32146;

import React from 'react';
const LABEL_26201 = 'component_26201';
export function Component26201({ value = 26201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26201, 'data-value': derived.doubled }, children);
}
export default Component26201;

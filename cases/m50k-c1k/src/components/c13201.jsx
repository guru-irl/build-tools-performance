import React from 'react';
const LABEL_13201 = 'component_13201';
export function Component13201({ value = 13201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13201, 'data-value': derived.doubled }, children);
}
export default Component13201;

import React from 'react';
const LABEL_8201 = 'component_8201';
export function Component8201({ value = 8201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8201, 'data-value': derived.doubled }, children);
}
export default Component8201;

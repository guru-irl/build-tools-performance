import React from 'react';
const LABEL_32201 = 'component_32201';
export function Component32201({ value = 32201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32201, 'data-value': derived.doubled }, children);
}
export default Component32201;

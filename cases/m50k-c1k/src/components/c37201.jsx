import React from 'react';
const LABEL_37201 = 'component_37201';
export function Component37201({ value = 37201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37201, 'data-value': derived.doubled }, children);
}
export default Component37201;

import React from 'react';
const LABEL_32010 = 'component_32010';
export function Component32010({ value = 32010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32010, 'data-value': derived.doubled }, children);
}
export default Component32010;

import React from 'react';
const LABEL_32097 = 'component_32097';
export function Component32097({ value = 32097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32097, 'data-value': derived.doubled }, children);
}
export default Component32097;

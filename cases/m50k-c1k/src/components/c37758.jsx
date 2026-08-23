import React from 'react';
const LABEL_37758 = 'component_37758';
export function Component37758({ value = 37758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37758, 'data-value': derived.doubled }, children);
}
export default Component37758;

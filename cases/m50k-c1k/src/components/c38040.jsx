import React from 'react';
const LABEL_38040 = 'component_38040';
export function Component38040({ value = 38040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38040, 'data-value': derived.doubled }, children);
}
export default Component38040;

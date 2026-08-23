import React from 'react';
const LABEL_38057 = 'component_38057';
export function Component38057({ value = 38057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38057, 'data-value': derived.doubled }, children);
}
export default Component38057;

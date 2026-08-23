import React from 'react';
const LABEL_38097 = 'component_38097';
export function Component38097({ value = 38097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38097, 'data-value': derived.doubled }, children);
}
export default Component38097;

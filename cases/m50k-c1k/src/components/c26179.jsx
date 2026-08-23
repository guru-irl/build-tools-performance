import React from 'react';
const LABEL_26179 = 'component_26179';
export function Component26179({ value = 26179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26179, 'data-value': derived.doubled }, children);
}
export default Component26179;

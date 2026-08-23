import React from 'react';
const LABEL_38500 = 'component_38500';
export function Component38500({ value = 38500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38500, 'data-value': derived.doubled }, children);
}
export default Component38500;

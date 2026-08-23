import React from 'react';
const LABEL_29229 = 'component_29229';
export function Component29229({ value = 29229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29229, 'data-value': derived.doubled }, children);
}
export default Component29229;

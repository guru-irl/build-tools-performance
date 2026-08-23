import React from 'react';
const LABEL_29294 = 'component_29294';
export function Component29294({ value = 29294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29294, 'data-value': derived.doubled }, children);
}
export default Component29294;

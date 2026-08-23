import React from 'react';
const LABEL_29212 = 'component_29212';
export function Component29212({ value = 29212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29212, 'data-value': derived.doubled }, children);
}
export default Component29212;

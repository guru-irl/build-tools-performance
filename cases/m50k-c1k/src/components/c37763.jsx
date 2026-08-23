import React from 'react';
const LABEL_37763 = 'component_37763';
export function Component37763({ value = 37763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37763, 'data-value': derived.doubled }, children);
}
export default Component37763;

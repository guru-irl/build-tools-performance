import React from 'react';
const LABEL_41495 = 'component_41495';
export function Component41495({ value = 41495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41495, 'data-value': derived.doubled }, children);
}
export default Component41495;

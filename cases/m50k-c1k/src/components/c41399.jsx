import React from 'react';
const LABEL_41399 = 'component_41399';
export function Component41399({ value = 41399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41399, 'data-value': derived.doubled }, children);
}
export default Component41399;

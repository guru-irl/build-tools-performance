import React from 'react';
const LABEL_41149 = 'component_41149';
export function Component41149({ value = 41149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41149, 'data-value': derived.doubled }, children);
}
export default Component41149;

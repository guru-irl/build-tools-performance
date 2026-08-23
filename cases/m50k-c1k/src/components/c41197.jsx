import React from 'react';
const LABEL_41197 = 'component_41197';
export function Component41197({ value = 41197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41197, 'data-value': derived.doubled }, children);
}
export default Component41197;

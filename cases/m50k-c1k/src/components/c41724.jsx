import React from 'react';
const LABEL_41724 = 'component_41724';
export function Component41724({ value = 41724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41724, 'data-value': derived.doubled }, children);
}
export default Component41724;

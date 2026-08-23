import React from 'react';
const LABEL_41074 = 'component_41074';
export function Component41074({ value = 41074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41074, 'data-value': derived.doubled }, children);
}
export default Component41074;

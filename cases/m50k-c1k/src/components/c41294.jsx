import React from 'react';
const LABEL_41294 = 'component_41294';
export function Component41294({ value = 41294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41294, 'data-value': derived.doubled }, children);
}
export default Component41294;

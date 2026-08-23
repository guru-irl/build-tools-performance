import React from 'react';
const LABEL_41138 = 'component_41138';
export function Component41138({ value = 41138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41138, 'data-value': derived.doubled }, children);
}
export default Component41138;

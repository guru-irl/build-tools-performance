import React from 'react';
const LABEL_41625 = 'component_41625';
export function Component41625({ value = 41625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41625, 'data-value': derived.doubled }, children);
}
export default Component41625;

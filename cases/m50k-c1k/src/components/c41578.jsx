import React from 'react';
const LABEL_41578 = 'component_41578';
export function Component41578({ value = 41578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41578, 'data-value': derived.doubled }, children);
}
export default Component41578;

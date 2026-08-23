import React from 'react';
const LABEL_41552 = 'component_41552';
export function Component41552({ value = 41552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41552, 'data-value': derived.doubled }, children);
}
export default Component41552;

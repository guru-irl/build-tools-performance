import React from 'react';
const LABEL_42123 = 'component_42123';
export function Component42123({ value = 42123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42123, 'data-value': derived.doubled }, children);
}
export default Component42123;

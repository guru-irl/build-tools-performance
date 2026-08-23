import React from 'react';
const LABEL_1106 = 'component_1106';
export function Component1106({ value = 1106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1106, 'data-value': derived.doubled }, children);
}
export default Component1106;

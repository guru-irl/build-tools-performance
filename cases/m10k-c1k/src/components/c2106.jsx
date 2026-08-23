import React from 'react';
const LABEL_2106 = 'component_2106';
export function Component2106({ value = 2106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2106, 'data-value': derived.doubled }, children);
}
export default Component2106;

import React from 'react';
const LABEL_13106 = 'component_13106';
export function Component13106({ value = 13106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13106, 'data-value': derived.doubled }, children);
}
export default Component13106;

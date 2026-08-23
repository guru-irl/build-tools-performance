import React from 'react';
const LABEL_37106 = 'component_37106';
export function Component37106({ value = 37106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37106, 'data-value': derived.doubled }, children);
}
export default Component37106;

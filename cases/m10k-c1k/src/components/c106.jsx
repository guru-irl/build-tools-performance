import React from 'react';
const LABEL_106 = 'component_106';
export function Component106({ value = 106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_106, 'data-value': derived.doubled }, children);
}
export default Component106;

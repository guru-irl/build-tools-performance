import React from 'react';
const LABEL_21756 = 'component_21756';
export function Component21756({ value = 21756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21756, 'data-value': derived.doubled }, children);
}
export default Component21756;

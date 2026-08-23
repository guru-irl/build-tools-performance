import React from 'react';
const LABEL_36188 = 'component_36188';
export function Component36188({ value = 36188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36188, 'data-value': derived.doubled }, children);
}
export default Component36188;

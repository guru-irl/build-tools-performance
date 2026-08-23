import React from 'react';
const LABEL_42611 = 'component_42611';
export function Component42611({ value = 42611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42611, 'data-value': derived.doubled }, children);
}
export default Component42611;

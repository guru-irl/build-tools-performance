import React from 'react';
const LABEL_28385 = 'component_28385';
export function Component28385({ value = 28385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28385, 'data-value': derived.doubled }, children);
}
export default Component28385;

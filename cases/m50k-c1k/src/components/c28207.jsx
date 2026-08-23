import React from 'react';
const LABEL_28207 = 'component_28207';
export function Component28207({ value = 28207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28207, 'data-value': derived.doubled }, children);
}
export default Component28207;

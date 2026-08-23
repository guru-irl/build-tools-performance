import React from 'react';
const LABEL_14207 = 'component_14207';
export function Component14207({ value = 14207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14207, 'data-value': derived.doubled }, children);
}
export default Component14207;

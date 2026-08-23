import React from 'react';
const LABEL_32207 = 'component_32207';
export function Component32207({ value = 32207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32207, 'data-value': derived.doubled }, children);
}
export default Component32207;

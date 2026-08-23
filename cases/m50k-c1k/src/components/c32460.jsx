import React from 'react';
const LABEL_32460 = 'component_32460';
export function Component32460({ value = 32460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32460, 'data-value': derived.doubled }, children);
}
export default Component32460;

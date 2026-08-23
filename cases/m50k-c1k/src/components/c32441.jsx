import React from 'react';
const LABEL_32441 = 'component_32441';
export function Component32441({ value = 32441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32441, 'data-value': derived.doubled }, children);
}
export default Component32441;

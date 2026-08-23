import React from 'react';
const LABEL_3786 = 'component_3786';
export function Component3786({ value = 3786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3786, 'data-value': derived.doubled }, children);
}
export default Component3786;

import React from 'react';
const LABEL_32697 = 'component_32697';
export function Component32697({ value = 32697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32697, 'data-value': derived.doubled }, children);
}
export default Component32697;

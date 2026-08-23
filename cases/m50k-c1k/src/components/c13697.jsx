import React from 'react';
const LABEL_13697 = 'component_13697';
export function Component13697({ value = 13697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13697, 'data-value': derived.doubled }, children);
}
export default Component13697;

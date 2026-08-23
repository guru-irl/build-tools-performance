import React from 'react';
const LABEL_41606 = 'component_41606';
export function Component41606({ value = 41606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41606, 'data-value': derived.doubled }, children);
}
export default Component41606;

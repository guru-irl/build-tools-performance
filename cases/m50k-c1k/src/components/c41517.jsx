import React from 'react';
const LABEL_41517 = 'component_41517';
export function Component41517({ value = 41517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41517, 'data-value': derived.doubled }, children);
}
export default Component41517;

import React from 'react';
const LABEL_41159 = 'component_41159';
export function Component41159({ value = 41159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41159, 'data-value': derived.doubled }, children);
}
export default Component41159;

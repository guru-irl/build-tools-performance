import React from 'react';
const LABEL_7104 = 'component_7104';
export function Component7104({ value = 7104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7104, 'data-value': derived.doubled }, children);
}
export default Component7104;

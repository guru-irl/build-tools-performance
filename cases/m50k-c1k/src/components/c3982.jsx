import React from 'react';
const LABEL_3982 = 'component_3982';
export function Component3982({ value = 3982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3982, 'data-value': derived.doubled }, children);
}
export default Component3982;

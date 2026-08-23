import React from 'react';
const LABEL_42837 = 'component_42837';
export function Component42837({ value = 42837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42837, 'data-value': derived.doubled }, children);
}
export default Component42837;

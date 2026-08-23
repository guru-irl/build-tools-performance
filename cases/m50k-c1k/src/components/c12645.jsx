import React from 'react';
const LABEL_12645 = 'component_12645';
export function Component12645({ value = 12645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12645, 'data-value': derived.doubled }, children);
}
export default Component12645;

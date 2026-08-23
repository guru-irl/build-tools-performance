import React from 'react';
const LABEL_24645 = 'component_24645';
export function Component24645({ value = 24645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24645, 'data-value': derived.doubled }, children);
}
export default Component24645;

import React from 'react';
const LABEL_24700 = 'component_24700';
export function Component24700({ value = 24700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24700, 'data-value': derived.doubled }, children);
}
export default Component24700;

import React from 'react';
const LABEL_1950 = 'component_1950';
export function Component1950({ value = 1950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1950, 'data-value': derived.doubled }, children);
}
export default Component1950;

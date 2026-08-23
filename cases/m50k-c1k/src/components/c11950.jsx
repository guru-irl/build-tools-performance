import React from 'react';
const LABEL_11950 = 'component_11950';
export function Component11950({ value = 11950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11950, 'data-value': derived.doubled }, children);
}
export default Component11950;

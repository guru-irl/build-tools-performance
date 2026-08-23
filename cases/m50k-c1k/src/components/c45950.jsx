import React from 'react';
const LABEL_45950 = 'component_45950';
export function Component45950({ value = 45950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45950, 'data-value': derived.doubled }, children);
}
export default Component45950;

import React from 'react';
const LABEL_33598 = 'component_33598';
export function Component33598({ value = 33598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33598, 'data-value': derived.doubled }, children);
}
export default Component33598;

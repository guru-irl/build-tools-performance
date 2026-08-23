import React from 'react';
const LABEL_28598 = 'component_28598';
export function Component28598({ value = 28598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28598, 'data-value': derived.doubled }, children);
}
export default Component28598;

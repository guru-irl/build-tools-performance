import React from 'react';
const LABEL_13598 = 'component_13598';
export function Component13598({ value = 13598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13598, 'data-value': derived.doubled }, children);
}
export default Component13598;

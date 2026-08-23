import React from 'react';
const LABEL_5598 = 'component_5598';
export function Component5598({ value = 5598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5598, 'data-value': derived.doubled }, children);
}
export default Component5598;

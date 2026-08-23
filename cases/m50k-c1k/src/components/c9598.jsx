import React from 'react';
const LABEL_9598 = 'component_9598';
export function Component9598({ value = 9598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9598, 'data-value': derived.doubled }, children);
}
export default Component9598;

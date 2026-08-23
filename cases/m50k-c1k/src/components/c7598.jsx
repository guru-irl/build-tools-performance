import React from 'react';
const LABEL_7598 = 'component_7598';
export function Component7598({ value = 7598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7598, 'data-value': derived.doubled }, children);
}
export default Component7598;

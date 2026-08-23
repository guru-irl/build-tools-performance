import React from 'react';
const LABEL_8598 = 'component_8598';
export function Component8598({ value = 8598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8598, 'data-value': derived.doubled }, children);
}
export default Component8598;

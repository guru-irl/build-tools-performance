import React from 'react';
const LABEL_21598 = 'component_21598';
export function Component21598({ value = 21598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21598, 'data-value': derived.doubled }, children);
}
export default Component21598;

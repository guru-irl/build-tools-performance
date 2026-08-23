import React from 'react';
const LABEL_2598 = 'component_2598';
export function Component2598({ value = 2598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2598, 'data-value': derived.doubled }, children);
}
export default Component2598;

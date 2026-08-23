import React from 'react';
const LABEL_39598 = 'component_39598';
export function Component39598({ value = 39598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39598, 'data-value': derived.doubled }, children);
}
export default Component39598;

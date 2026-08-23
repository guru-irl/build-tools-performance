import React from 'react';
const LABEL_23598 = 'component_23598';
export function Component23598({ value = 23598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23598, 'data-value': derived.doubled }, children);
}
export default Component23598;

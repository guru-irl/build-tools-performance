import React from 'react';
const LABEL_23563 = 'component_23563';
export function Component23563({ value = 23563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23563, 'data-value': derived.doubled }, children);
}
export default Component23563;

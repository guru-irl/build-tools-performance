import React from 'react';
const LABEL_6598 = 'component_6598';
export function Component6598({ value = 6598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6598, 'data-value': derived.doubled }, children);
}
export default Component6598;

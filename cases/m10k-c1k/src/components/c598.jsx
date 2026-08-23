import React from 'react';
const LABEL_598 = 'component_598';
export function Component598({ value = 598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_598, 'data-value': derived.doubled }, children);
}
export default Component598;

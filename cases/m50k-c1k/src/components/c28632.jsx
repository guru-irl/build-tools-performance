import React from 'react';
const LABEL_28632 = 'component_28632';
export function Component28632({ value = 28632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28632, 'data-value': derived.doubled }, children);
}
export default Component28632;

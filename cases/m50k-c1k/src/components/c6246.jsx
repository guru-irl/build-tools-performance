import React from 'react';
const LABEL_6246 = 'component_6246';
export function Component6246({ value = 6246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6246, 'data-value': derived.doubled }, children);
}
export default Component6246;

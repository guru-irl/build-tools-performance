import React from 'react';
const LABEL_34884 = 'component_34884';
export function Component34884({ value = 34884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34884, 'data-value': derived.doubled }, children);
}
export default Component34884;

import React from 'react';
const LABEL_12699 = 'component_12699';
export function Component12699({ value = 12699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12699, 'data-value': derived.doubled }, children);
}
export default Component12699;

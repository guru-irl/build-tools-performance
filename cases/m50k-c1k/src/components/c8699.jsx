import React from 'react';
const LABEL_8699 = 'component_8699';
export function Component8699({ value = 8699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8699, 'data-value': derived.doubled }, children);
}
export default Component8699;

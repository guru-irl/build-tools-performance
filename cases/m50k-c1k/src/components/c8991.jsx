import React from 'react';
const LABEL_8991 = 'component_8991';
export function Component8991({ value = 8991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8991, 'data-value': derived.doubled }, children);
}
export default Component8991;

import React from 'react';
const LABEL_8781 = 'component_8781';
export function Component8781({ value = 8781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8781, 'data-value': derived.doubled }, children);
}
export default Component8781;

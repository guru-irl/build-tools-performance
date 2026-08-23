import React from 'react';
const LABEL_36583 = 'component_36583';
export function Component36583({ value = 36583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36583, 'data-value': derived.doubled }, children);
}
export default Component36583;

import React from 'react';
const LABEL_876 = 'component_876';
export function Component876({ value = 876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_876, 'data-value': derived.doubled }, children);
}
export default Component876;

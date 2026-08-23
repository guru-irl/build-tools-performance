import React from 'react';
const LABEL_11842 = 'component_11842';
export function Component11842({ value = 11842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11842, 'data-value': derived.doubled }, children);
}
export default Component11842;

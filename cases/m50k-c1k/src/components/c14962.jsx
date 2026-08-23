import React from 'react';
const LABEL_14962 = 'component_14962';
export function Component14962({ value = 14962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14962, 'data-value': derived.doubled }, children);
}
export default Component14962;

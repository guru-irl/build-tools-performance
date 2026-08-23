import React from 'react';
const LABEL_11962 = 'component_11962';
export function Component11962({ value = 11962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11962, 'data-value': derived.doubled }, children);
}
export default Component11962;

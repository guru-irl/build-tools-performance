import React from 'react';
const LABEL_11568 = 'component_11568';
export function Component11568({ value = 11568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11568, 'data-value': derived.doubled }, children);
}
export default Component11568;

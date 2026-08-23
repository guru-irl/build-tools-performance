import React from 'react';
const LABEL_11713 = 'component_11713';
export function Component11713({ value = 11713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11713, 'data-value': derived.doubled }, children);
}
export default Component11713;

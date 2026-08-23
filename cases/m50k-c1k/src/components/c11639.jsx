import React from 'react';
const LABEL_11639 = 'component_11639';
export function Component11639({ value = 11639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11639, 'data-value': derived.doubled }, children);
}
export default Component11639;

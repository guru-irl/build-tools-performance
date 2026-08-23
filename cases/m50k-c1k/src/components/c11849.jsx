import React from 'react';
const LABEL_11849 = 'component_11849';
export function Component11849({ value = 11849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11849, 'data-value': derived.doubled }, children);
}
export default Component11849;

import React from 'react';
const LABEL_11567 = 'component_11567';
export function Component11567({ value = 11567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11567, 'data-value': derived.doubled }, children);
}
export default Component11567;

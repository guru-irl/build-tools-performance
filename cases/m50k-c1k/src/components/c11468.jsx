import React from 'react';
const LABEL_11468 = 'component_11468';
export function Component11468({ value = 11468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11468, 'data-value': derived.doubled }, children);
}
export default Component11468;

import React from 'react';
const LABEL_11636 = 'component_11636';
export function Component11636({ value = 11636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11636, 'data-value': derived.doubled }, children);
}
export default Component11636;

import React from 'react';
const LABEL_11577 = 'component_11577';
export function Component11577({ value = 11577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11577, 'data-value': derived.doubled }, children);
}
export default Component11577;

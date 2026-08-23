import React from 'react';
const LABEL_28198 = 'component_28198';
export function Component28198({ value = 28198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28198, 'data-value': derived.doubled }, children);
}
export default Component28198;

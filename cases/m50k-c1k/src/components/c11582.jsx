import React from 'react';
const LABEL_11582 = 'component_11582';
export function Component11582({ value = 11582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11582, 'data-value': derived.doubled }, children);
}
export default Component11582;

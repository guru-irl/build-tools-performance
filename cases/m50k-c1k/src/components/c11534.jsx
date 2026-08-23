import React from 'react';
const LABEL_11534 = 'component_11534';
export function Component11534({ value = 11534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11534, 'data-value': derived.doubled }, children);
}
export default Component11534;

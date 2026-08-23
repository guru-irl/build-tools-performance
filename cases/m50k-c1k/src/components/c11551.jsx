import React from 'react';
const LABEL_11551 = 'component_11551';
export function Component11551({ value = 11551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11551, 'data-value': derived.doubled }, children);
}
export default Component11551;

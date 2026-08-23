import React from 'react';
const LABEL_14651 = 'component_14651';
export function Component14651({ value = 14651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14651, 'data-value': derived.doubled }, children);
}
export default Component14651;

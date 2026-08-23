import React from 'react';
const LABEL_9088 = 'component_9088';
export function Component9088({ value = 9088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9088, 'data-value': derived.doubled }, children);
}
export default Component9088;

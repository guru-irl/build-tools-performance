import React from 'react';
const LABEL_36088 = 'component_36088';
export function Component36088({ value = 36088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36088, 'data-value': derived.doubled }, children);
}
export default Component36088;

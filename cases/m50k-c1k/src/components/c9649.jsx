import React from 'react';
const LABEL_9649 = 'component_9649';
export function Component9649({ value = 9649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9649, 'data-value': derived.doubled }, children);
}
export default Component9649;

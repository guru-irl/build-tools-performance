import React from 'react';
const LABEL_37647 = 'component_37647';
export function Component37647({ value = 37647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37647, 'data-value': derived.doubled }, children);
}
export default Component37647;

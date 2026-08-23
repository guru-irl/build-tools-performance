import React from 'react';
const LABEL_37708 = 'component_37708';
export function Component37708({ value = 37708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37708, 'data-value': derived.doubled }, children);
}
export default Component37708;

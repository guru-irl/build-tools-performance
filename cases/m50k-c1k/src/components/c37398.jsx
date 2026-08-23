import React from 'react';
const LABEL_37398 = 'component_37398';
export function Component37398({ value = 37398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37398, 'data-value': derived.doubled }, children);
}
export default Component37398;

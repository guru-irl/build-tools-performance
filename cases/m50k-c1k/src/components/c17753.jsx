import React from 'react';
const LABEL_17753 = 'component_17753';
export function Component17753({ value = 17753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17753, 'data-value': derived.doubled }, children);
}
export default Component17753;

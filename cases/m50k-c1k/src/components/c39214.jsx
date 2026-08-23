import React from 'react';
const LABEL_39214 = 'component_39214';
export function Component39214({ value = 39214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39214, 'data-value': derived.doubled }, children);
}
export default Component39214;

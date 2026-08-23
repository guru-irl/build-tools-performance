import React from 'react';
const LABEL_37533 = 'component_37533';
export function Component37533({ value = 37533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37533, 'data-value': derived.doubled }, children);
}
export default Component37533;

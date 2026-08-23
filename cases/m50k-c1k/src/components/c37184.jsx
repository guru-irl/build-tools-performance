import React from 'react';
const LABEL_37184 = 'component_37184';
export function Component37184({ value = 37184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37184, 'data-value': derived.doubled }, children);
}
export default Component37184;

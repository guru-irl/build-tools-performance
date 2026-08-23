import React from 'react';
const LABEL_31738 = 'component_31738';
export function Component31738({ value = 31738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31738, 'data-value': derived.doubled }, children);
}
export default Component31738;

import React from 'react';
const LABEL_24842 = 'component_24842';
export function Component24842({ value = 24842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24842, 'data-value': derived.doubled }, children);
}
export default Component24842;

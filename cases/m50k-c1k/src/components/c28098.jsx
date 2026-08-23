import React from 'react';
const LABEL_28098 = 'component_28098';
export function Component28098({ value = 28098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28098, 'data-value': derived.doubled }, children);
}
export default Component28098;

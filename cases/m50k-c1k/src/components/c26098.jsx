import React from 'react';
const LABEL_26098 = 'component_26098';
export function Component26098({ value = 26098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26098, 'data-value': derived.doubled }, children);
}
export default Component26098;

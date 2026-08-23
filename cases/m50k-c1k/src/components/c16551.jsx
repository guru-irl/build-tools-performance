import React from 'react';
const LABEL_16551 = 'component_16551';
export function Component16551({ value = 16551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16551, 'data-value': derived.doubled }, children);
}
export default Component16551;

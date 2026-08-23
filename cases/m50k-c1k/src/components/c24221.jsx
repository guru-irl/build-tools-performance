import React from 'react';
const LABEL_24221 = 'component_24221';
export function Component24221({ value = 24221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24221, 'data-value': derived.doubled }, children);
}
export default Component24221;

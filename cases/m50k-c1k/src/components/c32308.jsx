import React from 'react';
const LABEL_32308 = 'component_32308';
export function Component32308({ value = 32308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32308, 'data-value': derived.doubled }, children);
}
export default Component32308;

import React from 'react';
const LABEL_37554 = 'component_37554';
export function Component37554({ value = 37554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37554, 'data-value': derived.doubled }, children);
}
export default Component37554;

import React from 'react';
const LABEL_24788 = 'component_24788';
export function Component24788({ value = 24788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24788, 'data-value': derived.doubled }, children);
}
export default Component24788;

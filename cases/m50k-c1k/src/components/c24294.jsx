import React from 'react';
const LABEL_24294 = 'component_24294';
export function Component24294({ value = 24294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24294, 'data-value': derived.doubled }, children);
}
export default Component24294;

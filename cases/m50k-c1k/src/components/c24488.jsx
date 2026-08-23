import React from 'react';
const LABEL_24488 = 'component_24488';
export function Component24488({ value = 24488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24488, 'data-value': derived.doubled }, children);
}
export default Component24488;

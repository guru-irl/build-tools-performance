import React from 'react';
const LABEL_24107 = 'component_24107';
export function Component24107({ value = 24107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24107, 'data-value': derived.doubled }, children);
}
export default Component24107;

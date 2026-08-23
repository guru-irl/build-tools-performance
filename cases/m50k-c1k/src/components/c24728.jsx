import React from 'react';
const LABEL_24728 = 'component_24728';
export function Component24728({ value = 24728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24728, 'data-value': derived.doubled }, children);
}
export default Component24728;

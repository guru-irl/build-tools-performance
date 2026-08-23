import React from 'react';
const LABEL_10728 = 'component_10728';
export function Component10728({ value = 10728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10728, 'data-value': derived.doubled }, children);
}
export default Component10728;

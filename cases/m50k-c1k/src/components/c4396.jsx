import React from 'react';
const LABEL_4396 = 'component_4396';
export function Component4396({ value = 4396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4396, 'data-value': derived.doubled }, children);
}
export default Component4396;

import React from 'react';
const LABEL_10713 = 'component_10713';
export function Component10713({ value = 10713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10713, 'data-value': derived.doubled }, children);
}
export default Component10713;

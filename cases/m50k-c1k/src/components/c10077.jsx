import React from 'react';
const LABEL_10077 = 'component_10077';
export function Component10077({ value = 10077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10077, 'data-value': derived.doubled }, children);
}
export default Component10077;

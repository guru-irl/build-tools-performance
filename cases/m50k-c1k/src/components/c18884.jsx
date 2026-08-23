import React from 'react';
const LABEL_18884 = 'component_18884';
export function Component18884({ value = 18884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18884, 'data-value': derived.doubled }, children);
}
export default Component18884;

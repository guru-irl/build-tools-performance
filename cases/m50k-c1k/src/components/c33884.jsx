import React from 'react';
const LABEL_33884 = 'component_33884';
export function Component33884({ value = 33884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33884, 'data-value': derived.doubled }, children);
}
export default Component33884;

import React from 'react';
const LABEL_10648 = 'component_10648';
export function Component10648({ value = 10648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10648, 'data-value': derived.doubled }, children);
}
export default Component10648;

import React from 'react';
const LABEL_10049 = 'component_10049';
export function Component10049({ value = 10049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10049, 'data-value': derived.doubled }, children);
}
export default Component10049;

import React from 'react';
const LABEL_10258 = 'component_10258';
export function Component10258({ value = 10258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10258, 'data-value': derived.doubled }, children);
}
export default Component10258;

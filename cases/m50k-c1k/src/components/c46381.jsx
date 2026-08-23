import React from 'react';
const LABEL_46381 = 'component_46381';
export function Component46381({ value = 46381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46381, 'data-value': derived.doubled }, children);
}
export default Component46381;

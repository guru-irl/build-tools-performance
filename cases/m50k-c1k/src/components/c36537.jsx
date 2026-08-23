import React from 'react';
const LABEL_36537 = 'component_36537';
export function Component36537({ value = 36537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36537, 'data-value': derived.doubled }, children);
}
export default Component36537;

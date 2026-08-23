import React from 'react';
const LABEL_36853 = 'component_36853';
export function Component36853({ value = 36853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36853, 'data-value': derived.doubled }, children);
}
export default Component36853;

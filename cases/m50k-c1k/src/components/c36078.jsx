import React from 'react';
const LABEL_36078 = 'component_36078';
export function Component36078({ value = 36078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36078, 'data-value': derived.doubled }, children);
}
export default Component36078;

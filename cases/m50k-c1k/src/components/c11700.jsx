import React from 'react';
const LABEL_11700 = 'component_11700';
export function Component11700({ value = 11700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11700, 'data-value': derived.doubled }, children);
}
export default Component11700;

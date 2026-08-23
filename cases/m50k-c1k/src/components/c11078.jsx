import React from 'react';
const LABEL_11078 = 'component_11078';
export function Component11078({ value = 11078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11078, 'data-value': derived.doubled }, children);
}
export default Component11078;

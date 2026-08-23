import React from 'react';
const LABEL_14172 = 'component_14172';
export function Component14172({ value = 14172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14172, 'data-value': derived.doubled }, children);
}
export default Component14172;

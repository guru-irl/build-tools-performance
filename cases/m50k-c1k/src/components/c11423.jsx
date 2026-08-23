import React from 'react';
const LABEL_11423 = 'component_11423';
export function Component11423({ value = 11423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11423, 'data-value': derived.doubled }, children);
}
export default Component11423;

import React from 'react';
const LABEL_21078 = 'component_21078';
export function Component21078({ value = 21078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21078, 'data-value': derived.doubled }, children);
}
export default Component21078;

import React from 'react';
const LABEL_10940 = 'component_10940';
export function Component10940({ value = 10940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10940, 'data-value': derived.doubled }, children);
}
export default Component10940;

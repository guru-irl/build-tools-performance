import React from 'react';
const LABEL_20541 = 'component_20541';
export function Component20541({ value = 20541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20541, 'data-value': derived.doubled }, children);
}
export default Component20541;

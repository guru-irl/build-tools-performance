import React from 'react';
const LABEL_45991 = 'component_45991';
export function Component45991({ value = 45991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45991, 'data-value': derived.doubled }, children);
}
export default Component45991;

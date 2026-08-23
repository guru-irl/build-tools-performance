import React from 'react';
const LABEL_22423 = 'component_22423';
export function Component22423({ value = 22423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22423, 'data-value': derived.doubled }, children);
}
export default Component22423;

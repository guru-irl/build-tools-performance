import React from 'react';
const LABEL_19991 = 'component_19991';
export function Component19991({ value = 19991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19991, 'data-value': derived.doubled }, children);
}
export default Component19991;

import React from 'react';
const LABEL_20211 = 'component_20211';
export function Component20211({ value = 20211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20211, 'data-value': derived.doubled }, children);
}
export default Component20211;

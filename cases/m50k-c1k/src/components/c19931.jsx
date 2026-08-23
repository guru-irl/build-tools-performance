import React from 'react';
const LABEL_19931 = 'component_19931';
export function Component19931({ value = 19931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19931, 'data-value': derived.doubled }, children);
}
export default Component19931;

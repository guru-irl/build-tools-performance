import React from 'react';
const LABEL_19875 = 'component_19875';
export function Component19875({ value = 19875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19875, 'data-value': derived.doubled }, children);
}
export default Component19875;

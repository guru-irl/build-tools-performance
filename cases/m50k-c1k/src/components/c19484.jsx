import React from 'react';
const LABEL_19484 = 'component_19484';
export function Component19484({ value = 19484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19484, 'data-value': derived.doubled }, children);
}
export default Component19484;

import React from 'react';
const LABEL_19065 = 'component_19065';
export function Component19065({ value = 19065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19065, 'data-value': derived.doubled }, children);
}
export default Component19065;

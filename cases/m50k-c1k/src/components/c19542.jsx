import React from 'react';
const LABEL_19542 = 'component_19542';
export function Component19542({ value = 19542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19542, 'data-value': derived.doubled }, children);
}
export default Component19542;

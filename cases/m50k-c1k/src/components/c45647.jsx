import React from 'react';
const LABEL_45647 = 'component_45647';
export function Component45647({ value = 45647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45647, 'data-value': derived.doubled }, children);
}
export default Component45647;

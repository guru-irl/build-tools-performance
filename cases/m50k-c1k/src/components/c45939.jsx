import React from 'react';
const LABEL_45939 = 'component_45939';
export function Component45939({ value = 45939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45939, 'data-value': derived.doubled }, children);
}
export default Component45939;

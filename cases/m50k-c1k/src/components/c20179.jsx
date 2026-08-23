import React from 'react';
const LABEL_20179 = 'component_20179';
export function Component20179({ value = 20179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20179, 'data-value': derived.doubled }, children);
}
export default Component20179;

import React from 'react';
const LABEL_42343 = 'component_42343';
export function Component42343({ value = 42343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42343, 'data-value': derived.doubled }, children);
}
export default Component42343;

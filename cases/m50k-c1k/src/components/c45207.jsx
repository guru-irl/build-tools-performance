import React from 'react';
const LABEL_45207 = 'component_45207';
export function Component45207({ value = 45207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45207, 'data-value': derived.doubled }, children);
}
export default Component45207;

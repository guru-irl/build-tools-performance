import React from 'react';
const LABEL_20207 = 'component_20207';
export function Component20207({ value = 20207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20207, 'data-value': derived.doubled }, children);
}
export default Component20207;

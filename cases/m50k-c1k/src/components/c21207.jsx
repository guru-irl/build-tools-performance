import React from 'react';
const LABEL_21207 = 'component_21207';
export function Component21207({ value = 21207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21207, 'data-value': derived.doubled }, children);
}
export default Component21207;

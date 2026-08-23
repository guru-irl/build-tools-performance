import React from 'react';
const LABEL_32558 = 'component_32558';
export function Component32558({ value = 32558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32558, 'data-value': derived.doubled }, children);
}
export default Component32558;

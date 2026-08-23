import React from 'react';
const LABEL_2802 = 'component_2802';
export function Component2802({ value = 2802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2802, 'data-value': derived.doubled }, children);
}
export default Component2802;

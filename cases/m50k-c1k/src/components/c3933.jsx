import React from 'react';
const LABEL_3933 = 'component_3933';
export function Component3933({ value = 3933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3933, 'data-value': derived.doubled }, children);
}
export default Component3933;

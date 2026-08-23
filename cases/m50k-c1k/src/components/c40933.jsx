import React from 'react';
const LABEL_40933 = 'component_40933';
export function Component40933({ value = 40933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40933, 'data-value': derived.doubled }, children);
}
export default Component40933;

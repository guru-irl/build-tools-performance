import React from 'react';
const LABEL_7488 = 'component_7488';
export function Component7488({ value = 7488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7488, 'data-value': derived.doubled }, children);
}
export default Component7488;

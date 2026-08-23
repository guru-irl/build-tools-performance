import React from 'react';
const LABEL_4170 = 'component_4170';
export function Component4170({ value = 4170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4170, 'data-value': derived.doubled }, children);
}
export default Component4170;

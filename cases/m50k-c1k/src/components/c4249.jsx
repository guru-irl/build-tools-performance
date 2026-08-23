import React from 'react';
const LABEL_4249 = 'component_4249';
export function Component4249({ value = 4249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4249, 'data-value': derived.doubled }, children);
}
export default Component4249;

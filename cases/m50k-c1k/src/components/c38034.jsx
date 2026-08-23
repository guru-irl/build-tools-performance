import React from 'react';
const LABEL_38034 = 'component_38034';
export function Component38034({ value = 38034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38034, 'data-value': derived.doubled }, children);
}
export default Component38034;

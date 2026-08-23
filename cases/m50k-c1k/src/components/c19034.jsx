import React from 'react';
const LABEL_19034 = 'component_19034';
export function Component19034({ value = 19034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19034, 'data-value': derived.doubled }, children);
}
export default Component19034;

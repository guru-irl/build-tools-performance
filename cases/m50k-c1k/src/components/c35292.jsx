import React from 'react';
const LABEL_35292 = 'component_35292';
export function Component35292({ value = 35292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35292, 'data-value': derived.doubled }, children);
}
export default Component35292;

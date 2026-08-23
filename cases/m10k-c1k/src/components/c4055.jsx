import React from 'react';
const LABEL_4055 = 'component_4055';
export function Component4055({ value = 4055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4055, 'data-value': derived.doubled }, children);
}
export default Component4055;

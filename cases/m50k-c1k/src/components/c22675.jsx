import React from 'react';
const LABEL_22675 = 'component_22675';
export function Component22675({ value = 22675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22675, 'data-value': derived.doubled }, children);
}
export default Component22675;

import React from 'react';
const LABEL_45253 = 'component_45253';
export function Component45253({ value = 45253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45253, 'data-value': derived.doubled }, children);
}
export default Component45253;

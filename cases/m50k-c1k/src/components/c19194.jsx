import React from 'react';
const LABEL_19194 = 'component_19194';
export function Component19194({ value = 19194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19194, 'data-value': derived.doubled }, children);
}
export default Component19194;

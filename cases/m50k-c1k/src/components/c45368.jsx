import React from 'react';
const LABEL_45368 = 'component_45368';
export function Component45368({ value = 45368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45368, 'data-value': derived.doubled }, children);
}
export default Component45368;

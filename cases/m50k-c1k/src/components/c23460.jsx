import React from 'react';
const LABEL_23460 = 'component_23460';
export function Component23460({ value = 23460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23460, 'data-value': derived.doubled }, children);
}
export default Component23460;

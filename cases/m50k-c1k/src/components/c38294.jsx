import React from 'react';
const LABEL_38294 = 'component_38294';
export function Component38294({ value = 38294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38294, 'data-value': derived.doubled }, children);
}
export default Component38294;

import React from 'react';
const LABEL_38690 = 'component_38690';
export function Component38690({ value = 38690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38690, 'data-value': derived.doubled }, children);
}
export default Component38690;

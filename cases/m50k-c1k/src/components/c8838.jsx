import React from 'react';
const LABEL_8838 = 'component_8838';
export function Component8838({ value = 8838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8838, 'data-value': derived.doubled }, children);
}
export default Component8838;

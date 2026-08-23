import React from 'react';
const LABEL_40842 = 'component_40842';
export function Component40842({ value = 40842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40842, 'data-value': derived.doubled }, children);
}
export default Component40842;

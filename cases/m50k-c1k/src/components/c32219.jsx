import React from 'react';
const LABEL_32219 = 'component_32219';
export function Component32219({ value = 32219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32219, 'data-value': derived.doubled }, children);
}
export default Component32219;

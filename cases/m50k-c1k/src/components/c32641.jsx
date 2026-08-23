import React from 'react';
const LABEL_32641 = 'component_32641';
export function Component32641({ value = 32641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32641, 'data-value': derived.doubled }, children);
}
export default Component32641;

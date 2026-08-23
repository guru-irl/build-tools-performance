import React from 'react';
const LABEL_37466 = 'component_37466';
export function Component37466({ value = 37466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37466, 'data-value': derived.doubled }, children);
}
export default Component37466;

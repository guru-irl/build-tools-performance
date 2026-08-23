import React from 'react';
const LABEL_5527 = 'component_5527';
export function Component5527({ value = 5527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5527, 'data-value': derived.doubled }, children);
}
export default Component5527;

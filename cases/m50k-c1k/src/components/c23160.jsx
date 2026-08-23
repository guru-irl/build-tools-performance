import React from 'react';
const LABEL_23160 = 'component_23160';
export function Component23160({ value = 23160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23160, 'data-value': derived.doubled }, children);
}
export default Component23160;

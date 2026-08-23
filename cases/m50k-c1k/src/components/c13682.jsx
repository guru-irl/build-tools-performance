import React from 'react';
const LABEL_13682 = 'component_13682';
export function Component13682({ value = 13682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13682, 'data-value': derived.doubled }, children);
}
export default Component13682;

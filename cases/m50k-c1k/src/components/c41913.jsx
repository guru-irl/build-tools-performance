import React from 'react';
const LABEL_41913 = 'component_41913';
export function Component41913({ value = 41913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41913, 'data-value': derived.doubled }, children);
}
export default Component41913;

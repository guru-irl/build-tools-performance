import React from 'react';
const LABEL_4004 = 'component_4004';
export function Component4004({ value = 4004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4004, 'data-value': derived.doubled }, children);
}
export default Component4004;

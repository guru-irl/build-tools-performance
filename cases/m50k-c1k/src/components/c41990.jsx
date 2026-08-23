import React from 'react';
const LABEL_41990 = 'component_41990';
export function Component41990({ value = 41990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41990, 'data-value': derived.doubled }, children);
}
export default Component41990;

import React from 'react';
const LABEL_8704 = 'component_8704';
export function Component8704({ value = 8704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8704, 'data-value': derived.doubled }, children);
}
export default Component8704;

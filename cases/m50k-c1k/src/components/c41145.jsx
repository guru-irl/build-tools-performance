import React from 'react';
const LABEL_41145 = 'component_41145';
export function Component41145({ value = 41145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41145, 'data-value': derived.doubled }, children);
}
export default Component41145;

import React from 'react';
const LABEL_21036 = 'component_21036';
export function Component21036({ value = 21036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21036, 'data-value': derived.doubled }, children);
}
export default Component21036;

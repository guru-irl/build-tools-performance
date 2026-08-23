import React from 'react';
const LABEL_7652 = 'component_7652';
export function Component7652({ value = 7652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7652, 'data-value': derived.doubled }, children);
}
export default Component7652;

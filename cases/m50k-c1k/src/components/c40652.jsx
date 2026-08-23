import React from 'react';
const LABEL_40652 = 'component_40652';
export function Component40652({ value = 40652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40652, 'data-value': derived.doubled }, children);
}
export default Component40652;

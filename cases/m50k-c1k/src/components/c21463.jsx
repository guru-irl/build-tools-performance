import React from 'react';
const LABEL_21463 = 'component_21463';
export function Component21463({ value = 21463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21463, 'data-value': derived.doubled }, children);
}
export default Component21463;

import React from 'react';
const LABEL_21706 = 'component_21706';
export function Component21706({ value = 21706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21706, 'data-value': derived.doubled }, children);
}
export default Component21706;

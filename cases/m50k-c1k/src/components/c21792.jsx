import React from 'react';
const LABEL_21792 = 'component_21792';
export function Component21792({ value = 21792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21792, 'data-value': derived.doubled }, children);
}
export default Component21792;
